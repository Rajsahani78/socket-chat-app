const express = require("express");
const getAllUsers = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRoute = express.Router();
userRoute.get("/", authMiddleware, getAllUsers)
module.exports = userRoute