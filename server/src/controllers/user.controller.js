const { getAllUsersService } = require("../services/user.service");
const asyncHandler = require("../utils/asyncHandler");

const getAllUsers = asyncHandler(async(req, res)=>{
    const search = req.query?.search;
    const users = await getAllUsersService(search)
    res.status(200).json({
        success: true,
        message: "All users data",
        data: users

    })
})

module.exports = getAllUsers
