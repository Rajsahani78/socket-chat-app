const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const AppError = require("../utils/AppError");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      throw new AppError("Access token required", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id)
      .select("-password");

    if (!user) {
      throw new AppError("User not found", 401);
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;