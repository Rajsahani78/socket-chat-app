const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const mainRoute = express.Router();

mainRoute.use("/auth", authRoute)
mainRoute.use("/user", userRoute)

module.exports = mainRoute