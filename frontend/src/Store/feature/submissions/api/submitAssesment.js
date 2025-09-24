import { SUBMIT_ASSESSMENT_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";
import { localStorageKey_token } from "../../../../Utils";

const submitAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        submitAssesment: build.mutation({
            query: ({ body, id }) => ({
                url: `${SUBMIT_ASSESSMENT_URL}/${id}`,
                method: "POST",
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Submissions"],
        }),
    }),
});

export const { useSubmitAssesmentMutation } = submitAssesmentApi;