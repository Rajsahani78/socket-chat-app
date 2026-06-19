const { createConversationServices, getRecentConversationsService, createMessageService, getSingleConversationService } = require("../services/conversation.service");
const asyncHandler = require("../utils/asyncHandler");

const getCreateConversation = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const body = req.body;
    const conversation = await createConversationServices(userId, body);

    res.status(200).json({
        success: true,
        data: conversation
    })
})

const getRecentConversations = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const conversations = await getRecentConversationsService(userId);
    res.status(200).json({
        success: true,
        message: "Recent conversations",
        data: conversations
    })
})

const getSingleConversation = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const conversationId = req.params.id;
    const conversations = await getSingleConversationService(userId, conversationId);
    res.status(200).json({
        success: true,
        message: "single conversations",
        data: conversations
    })
})

const createMessage = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const body = req.body;
    const message = await createMessageService(userId, body);
    const io = req.app.get("io");
    io.to(body.conversationId).emit("newMessage", message)

    res.status(201).json({
        success: true,
        message: "message sent",
        data: message
    })
})

module.exports = {
    getCreateConversation,
    getRecentConversations,
    getSingleConversation,
    createMessage
}