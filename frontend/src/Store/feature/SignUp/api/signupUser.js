import { SIGNUP_USER } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const signupUserApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        signupUser: build.mutation({
            query: (body) => ({
                url: SIGNUP_USER,
                method: 'POST',
                body
            }),
            transformResponse: (response) => {
                return response.data ?? {}
            },
            onQueryStarted: async (arg, { queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                } catch (error) {
                    console.log('Signup failed in RTK query file.', error);
                }
            },
        }),
    }),
})

export const { useSignupUserMutation } = signupUserApi;