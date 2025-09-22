import { DELETE_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const deleteTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteTemplate: build.mutation({
            query: (id) => ({
                url: `${DELETE_TEMPLATE_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Templates"]
        }),
    })
})

export const { useDeleteTemplateMutation } = deleteTemplateApi;