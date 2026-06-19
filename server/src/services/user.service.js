const User = require("../models/user.model")

const getAllUsersService = async (search) => {
  const users = await User.find({
    name: { $regex: search, $options: "i" }
  });

  return users;
};
module.exports = {
    getAllUsersService
}