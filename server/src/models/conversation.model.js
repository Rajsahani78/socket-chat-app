const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    type: {
      type: String,
      enum: ["direct", "group"],
      default: "direct",
    },

    groupName: {
      type: String,
      default: null,
    },

    groupAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      default: null,
    },

    lastMessage: {
      message: String,
      sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      createdAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Conversations = mongoose.model("Conversation", conversationSchema);
module.exports = Conversations