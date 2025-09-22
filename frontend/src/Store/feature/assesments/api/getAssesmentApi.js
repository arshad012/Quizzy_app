import { GET_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { setAssesment } from "../assesmentSlice";

export const getAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAssesment: build.query({
            query: (id) => ({
                url: `${GET_ASSESMENT_URL}/${id}`,
                method: 'GET'
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