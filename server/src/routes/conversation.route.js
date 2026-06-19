const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { getRecentConversations, getCreateConversation, getSingleConversation, createMessage } = require("../controllers/conversation.controller");
const { createMessageService } = require("../services/conversation.service");
const conversationRoute = express.Router();

conversationRoute.post("/create-conversation", authMiddleware, getCreateConversation)
conversationRoute.get("/recent-conversation", authMiddleware, getRecentConversations)
conversationRoute.get("/single-conversation/:id", authMiddleware, getSingleConversation)
conversationRoute.post("/create-message", authMiddleware, createMessage)

module.exports = conversationRoute