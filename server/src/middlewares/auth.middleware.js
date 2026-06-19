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
       if (error.name === "TokenExpiredError") {
      return next(
        new AppError("Token expired", 401)
      );
    }

    if (error.name === "JsonWebTokenError") {
      return next(
        new AppError("Invalid token", 401)
      );
    }
    next(error);
  }
};

module.exports = authMiddleware;