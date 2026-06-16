const User = require("../models/user.model")

const getAllUsersService = async()=>{
    const users =await User.find({})
    return users
}