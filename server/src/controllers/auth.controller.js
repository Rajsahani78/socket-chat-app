const { registerService, loginService, profileService } = require("../services/auth.service")
const AppError = require("../utils/appError")
const asyncHandler = require("../utils/asyncHandler")

const createRegister = asyncHandler(async (req, res) => {
    const body = req.body
    console.log(body)
    const user = await registerService(body);

    res.status(201).json({
        success: true,
        message: "User register successful"
    })

})

const login = asyncHandler(async (req, res) => {
    const body = req.body;
    const user = await loginService(body)

    res.status(200).json({
        success: true,
        message: "user login successful",
        data: user

    })
})

const profile = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const data = await profileService(userId)

    res.status(200).json({
        success: true,
        message: "user data",
        data
    })

})
module.exports = {
    createRegister,
    login,
    profile
}