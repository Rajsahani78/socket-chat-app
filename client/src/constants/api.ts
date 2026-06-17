export const baseUrl = import.meta.env.VITE_API_URL

export const API_URL = {
    AUTH: {
        LOGIN: `${baseUrl}/auth/login`,
        REGISTER: `${baseUrl}/auth/register`
    }
}