const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
            index: true,
        },

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        type: {
            type: String,
            enum: ["text", "image", "file", "audio"],
            default: "text",
        },

        text: {
            type: String,
            trim: true,
        },

        media: {
            url: String,
            public_id: String,
            name: String,
            size: Number,
            mimeType: String,
        },

        status: {
            type: String,
            enum: ["sent", "delivered", "seen"],
            default: "sent",
        },

        seenBy: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                seenAt: Date,
            },
        ],

        editedAt: {
            type: Date,
            default: null,
        },

        deletedFor: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Messages = mongoose.model("Message", messageSchema);
module. exports = Messages