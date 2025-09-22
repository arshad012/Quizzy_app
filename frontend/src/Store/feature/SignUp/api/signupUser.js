
import { SIGNUP_USER } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { setLoginKey } from "../../Login/loginSlice";

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
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setLoginKey({ key: 'userLoginInfo', value: data })
                    )

                    localStorage.setItem("userLoginInfo", JSON.stringify(data));
                } catch (error) {
                    console.log('Signup failed in RTK query file.', error);
                }
            },
        }),
    }),
})

export const { useSignupUserMutation } = signupUserApi;