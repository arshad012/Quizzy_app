import { CREATE_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const createTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createTemplate: build.mutation({
            query: (body) => ({
                url: CREATE_TEMPLATE_URL,
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Templates"]
        }),
    }),
})

export const { useCreateTemplateMutation } = createTemplateApi;