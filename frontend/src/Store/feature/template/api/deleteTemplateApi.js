import { DELETE_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const deleteTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteTemplate: build.mutation({
            query: (id) => ({
                url: `${DELETE_TEMPLATE_URL}/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Templates"]
        }),
    })
})

export const { useDeleteTemplateMutation } = deleteTemplateApi;