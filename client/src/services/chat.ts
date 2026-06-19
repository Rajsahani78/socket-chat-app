import { createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants/api";
import type { ChatResponse, CreateConversationResponse, MessagePayload, RecentChatResponse, SingleConversationResponse } from "../interfaces/chat.interface";
import { baseQueryWithAuth } from "./baseQuery";

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getRecentChat: builder.query<RecentChatResponse, void>({
            query: () => ({
                url: `${API_URL.CHAT.RECENT_CHATS}`,
                method: "GET",
            }),
        }),
        getsingleChat: builder.query<SingleConversationResponse, string>({
            query: (id) => ({
                url: `${API_URL.CHAT.SINGLE_CONVERSATION}/${id}`,
                method: "GET"
            })
        }),
        createConversation: builder.mutation<CreateConversationResponse, {participantId: string}>({
            query: (payload) => ({
                url: `${API_URL.CHAT.CREATE_CONVERSATION}`,
                method: "POST",
                body: payload
            })
        }),
        createMessage: builder.mutation<ChatResponse, MessagePayload>({
            query: (payload) => ({
                url: `${API_URL.CHAT.CREATE_MESSAGE}`,
                method: "POST",
                body: payload
            })
        })
    }),

});

export const { useGetRecentChatQuery, useGetsingleChatQuery, useCreateMessageMutation, useCreateConversationMutation } = chatApi;