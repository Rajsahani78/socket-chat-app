const asyncHandler = require("../utils/asyncHandler");

const getAllUsers = asyncHandler(async(requestAnimationFrame, res)=>{
    const users = await getAllUsersService()
    res.status(200).json({
        success: true,
        message: "All users data",
        data: users

    })
})

module.exports = getAllUsers
