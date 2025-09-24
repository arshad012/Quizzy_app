import { START_ASSESSMENT_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";
import { localStorageKey_token } from "../../../../Utils";

const startAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        startAssesment: build.mutation({
            query: ({ assesmentId }) => ({
                url: START_ASSESSMENT_URL,
                method: "POST",
                body: {
                    assesmentId,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Submissions"],
        }),
    }),
});

export const { useStartAssesmentMutation } = startAssesmentApi;