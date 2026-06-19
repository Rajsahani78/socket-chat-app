import { boolean, string } from "zod";
import type { User } from "./user.interface";

export interface Chat {
    participants: string[],
    type: string;
    groupName?: string;
    groupAdmin?: string;
    lastMessage: {
        message: string;
        sender: string;
    }
    createdAt: string,
}

export interface ChatResponse {
    success: boolean;
    data: Chat[];
}

export interface MessagePayload {
    conversationId: string;
    text: string;
    type: string;
}

export interface Conversation {
    lastMessage: string;
    _id: string;
    participants: User[];
    type: string;
    groupName: string;
    groupAdmin: string;
    createdAt: string
    updatedAt: string;
}

export interface CreateConversationResponse {
    success: boolean;
    data: Conversation;
}

export interface RecentChatResponse {
    success: boolean;
    message: string;
    data: Conversation[]
}
export interface Message {
    _id: string;
    conversationId: string;
    sender: string;
    type: string;
    text: string;
    status: string;
    editedA: string;
    deletedFor: User[],
    seenBy: User[],
    createdAt: string;
    "updatedAt": string;
}
export interface SingleConversationResponse {
    success: true;
    message: string;
    data: Message[]
}
