import { GET_ALL_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";


export const getAllTemplatesApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllTemplates: build.query({
            query: () => ({
                url: GET_ALL_TEMPLATE_URL,
                method: 'GET'
            }),
            transformResponse: (response) => {
                return response.data ?? []
            },
            providesTags: ["Templates"]
        })
    }),
})

export const { useGetAllTemplatesQuery } = getAllTemplatesApi;