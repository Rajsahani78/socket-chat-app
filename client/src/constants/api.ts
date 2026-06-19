export const baseUrl = import.meta.env.VITE_API_URL

export const API_URL = {
    AUTH: {
        LOGIN: `${baseUrl}/auth/login`,
        REGISTER: `${baseUrl}/auth/register`,
        PROFILE: `${baseUrl}/auth/me`
    },
    USER: {
        ALL_USERS: `${baseUrl}/user`,
    },
    CHAT: {
        CREATE_CONVERSATION: `${baseUrl}/conversation/create-conversation`,
        RECENT_CHATS: `${baseUrl}/conversation/recent-conversation`,
        SINGLE_CONVERSATION: `${baseUrl}/conversation/single-conversation`,
        CREATE_MESSAGE: `${baseUrl}/conversation/create-message`,
    }
}