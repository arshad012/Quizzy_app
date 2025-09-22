import { GET_ALL_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";


export const getAllAssesmentsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllAssesments: build.query({
            query: () => ({
                url: GET_ALL_ASSESMENT_URL,
                method: 'GET'
            }),
            transformResponse: (response) => {
                return response.data ?? []
            },
            providesTags: ["Assesments"]
        })
    }),
})

export const { useGetAllAssesmentsQuery } = getAllAssesmentsApi;