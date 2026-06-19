const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const conversationRoute = require("./conversation.route");
const mainRoute = express.Router();

mainRoute.use("/auth", authRoute)
mainRoute.use("/user", userRoute)
mainRoute.use("/conversation", conversationRoute)

module.exports = mainRoute