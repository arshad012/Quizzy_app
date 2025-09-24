import { GET_ALL_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const getAllTemplatesApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllTemplates: build.query({
            query: () => ({
                url: GET_ALL_TEMPLATE_URL,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            transformResponse: (response) => {
                return response.data ?? []
            },
            providesTags: ["Templates"]
        })
    }),
})

export const { useGetAllTemplatesQuery } = getAllTemplatesApi;