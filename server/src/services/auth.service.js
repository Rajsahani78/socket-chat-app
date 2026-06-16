const { generatePassword } = require("../helpers/generatePassword")
const { generateToken } = require("../helpers/token")
const valiedatePassword = require("../helpers/validatePassword")
const User = require("../models/user.model")
const AppError = require("../utils/appError")

const registerService = async (body) => {
    const isUserExist = await User.findOne({ email: body.email })
    if (isUserExist) {
        throw new AppError('User already exist with this email', 400)
    }

    const hashedPassword = await generatePassword(body.password)

    const user = new User({
        email: body.email,
        name: body.name,
        password: hashedPassword
    })
    await user.save()
}

const loginService = async (body) => {
    const user = await User.findOne({ email: body.email })

    if (!user) {
        throw new AppError("User does not found with this email", 404)
    }

    const isValidaPassword = await valiedatePassword(user.password, body.password);

    if (!isValidaPassword) {
        throw new AppError("password is not valid", 400)
    }

    const token = generateToken({ id: user._id, email: user.email })
    return token
}

const profileService = async (userId) => {
    if (!userId) {
        throw new AppError("Unaothorized user", 401)
    }

    const userData = await User.findOne({ _id: userId }).select("-password")
    return userData
}
module.exports = { registerService, loginService, profileService }