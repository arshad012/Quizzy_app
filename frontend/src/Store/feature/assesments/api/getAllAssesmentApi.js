import { GET_ALL_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const getAllAssesmentsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllAssesments: build.query({
            query: () => ({
                url: GET_ALL_ASSESMENT_URL,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            transformResponse: (response) => {
                return response.data ?? []
            },
            providesTags: ["Assesments"]
        })
    }),
})

export const { useGetAllAssesmentsQuery } = getAllAssesmentsApi;