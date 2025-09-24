import { GET_SUBMISSION_URL } from "../../../../constants";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

const getSubmissionApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getSubmission: build.query({
            query: (id) => ({
                url: `${GET_SUBMISSION_URL}/${id}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            transformResponse: (response) => {
                return response.data ?? {};
            },
            providesTags: ["Submissions"],
        }),
    }),
});

export const { useGetSubmissionQuery } = getSubmissionApi;