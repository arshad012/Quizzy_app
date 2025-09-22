import { LOGIN_USER } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { setLoginKey } from "../loginSlice";

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
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setLoginKey({ key: 'userLoginInfo', value: data })
                    )

                    localStorage.setItem("userLoginInfo", JSON.stringify(data));
                } catch (error) {
                    console.log('Login failed in RTK query file.', error);
                }
            },
        }),
    })
})

export const { useGetUserInfoToLoginMutation } = getUserInfoToLoginApi;