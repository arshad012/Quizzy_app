import { GET_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { setAssesment } from "../assesmentSlice";
import { localStorageKey_token } from "../../../../Utils";

export const getAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAssesment: build.query({
            query: (id) => ({
                url: `${GET_ASSESMENT_URL}/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            transformResponse: (response) => {
                return response.data ?? {}
            },
            onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
                const { data } = await queryFulfilled;
                dispatch(
                    setAssesment({
                        value: data
                    })
                )
            },
            providesTags: ["Assesments"]
        }),
    })
})

export const { useGetAssesmentQuery } = getAssesmentApi;