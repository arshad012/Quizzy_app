import { CREATE_TEMPLATE_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const createTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createTemplate: build.mutation({
            query: (body) => ({
                url: CREATE_TEMPLATE_URL,
                method: 'POST',
                body
            }),
            invalidatesTags: ["Templates"]
        }),
    }),
})

export const { useCreateTemplateMutation } = createTemplateApi;