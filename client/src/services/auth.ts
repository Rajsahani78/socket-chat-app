import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginFormData, Registerform } from "../schemas/auth.schema";
import type { LoginResponse, RegisterResponse } from "../interfaces/auth.interface";
import { API_URL, baseUrl } from "../constants/api";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginFormData>({
            query: (credentials) => ({
                url: API_URL.AUTH.LOGIN,
                method: "POST",
                body: credentials,
            }),
        }),
        registerUser: builder.mutation<RegisterResponse, Registerform>({
            query: (credentials) => ({
                url: API_URL.AUTH.REGISTER,
                method: "POST",
                body: credentials,
            }),
        }),
    }),

});

export const { useLoginMutation, useRegisterUserMutation } = authApi;