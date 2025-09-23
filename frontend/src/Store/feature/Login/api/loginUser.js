import { LOGIN_USER } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const getUserInfoToLoginApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUserInfoToLogin: build.mutation({
            query: ({ phone, password }) => ({
                url: LOGIN_USER,
                method: 'POST',
                body: { phone, password }
            }),
            transformResponse: (response) => {
                return response.data ?? {}
            },
            onQueryStarted: async (arg, { queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                } catch (error) {
                    console.log('Login failed in RTK query file.', error);
                }
            },
        }),
    })
})

export const { useGetUserInfoToLoginMutation } = getUserInfoToLoginApi;