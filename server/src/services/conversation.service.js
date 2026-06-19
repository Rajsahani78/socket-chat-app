const Conversations = require("../models/conversation.model");
const Messages = require("../models/message.model");
const AppError = require("../utils/AppError");

const createConversationServices = async (userId, body) => {
    if (!userId) {
        throw new AppError("Unauthorized user", 401);
    }

    const { participantId } = body;

    if (!participantId) {
        throw new AppError("participantId is required", 400);
    }

    let conversation = await Conversations.findOne({
        type: "direct",
        participants: { $all: [userId, participantId] }
    })
    .populate("participants", "name email")
    .populate("groupAdmin", "name email");

    if (conversation) {
        return conversation;
    }

    conversation = await Conversations.create({
        type: "direct",
        participants: [userId, participantId],
        lastMessage: null
    });

    conversation = await Conversations.findById(conversation._id)
        .populate("participants", "name email");

    return conversation;
};

const getRecentConversationsService = async (userId) => {
    if (!userId) {
        throw new AppError("Unauthorized user", 401);
    }

    const conversations = await Conversations.find({
        participants: userId
    })
    .sort({ updatedAt: -1 }) 
    .populate("participants", "name email")
    .populate("groupAdmin", "name email");

    return conversations;
};

const getSingleConversationService = async(userId, conversationId)=>{
     if (!userId) {
        throw new AppError("Unauthorized user", 401);
    }

     if (!conversationId) {
        throw new AppError("Conversation id is required", 400);
    }
    const conversation = await Messages.find({conversationId})
    return conversation
}

const createMessageService = async(userId, body)=>{
     if (!userId) {
        throw new AppError("Unauthorized user", 401);
    }

    const message = new Messages({
        conversationId: body.conversationId,
        sender: userId,        
        status: 'sent',
        type: body.type,
        text: body.text    
    })
    await message.save()
    return message;
}

module.exports = {
    createConversationServices,
    getRecentConversationsService,
    getSingleConversationService,
    createMessageService
};