import { GET_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { templateToState } from "../Utils/parser/templateToState";
import { setTemplate } from "../templateSlice";


export const getTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getTemplate: build.query({
            query: (id) => ({
                url: `${GET_TEMPLATE_URL}/${id}`,
                method: 'GET'
            }),
            transformResponse: (response) => {
                return response.data ?? {}
            },
            onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
                const { data } = await queryFulfilled;
                dispatch(
                    setTemplate({ 
                        value: templateToState(data) 
                    })
                )
            },
            providesTags: ["Templates"]
        }),
    })
})

export const { useGetTemplateQuery } = getTemplateApi;