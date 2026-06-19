import { createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants/api";
import type { AllUsersResponse, ProfileResponse } from "../interfaces/user.interface";
import { baseQueryWithAuth } from "./baseQuery";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        allUser: builder.query<AllUsersResponse, string>({
            query: (search) => ({
                url: `${API_URL.USER.ALL_USERS}?search=${search}`,
                method: "GET",
            }),
        }),
         getProfile: builder.query<ProfileResponse, void>({
            query: () => ({
                url: API_URL.AUTH.PROFILE,
                method: "GET",
            })
        })
    }),

});

export const { useAllUserQuery, useGetProfileQuery } = userApi;