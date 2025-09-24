import { CREATE_ASSESMENT_USING_AI_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const createAssesmentUsingAIApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createAssesmentUsingAI: build.mutation({
            query: (body) => ({
                url: CREATE_ASSESMENT_USING_AI_URL,
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Assesments"]
        }),
    }),
})

export const { useCreateAssesmentUsingAIMutation } = createAssesmentUsingAIApi;