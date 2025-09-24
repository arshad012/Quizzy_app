import { DELETE_SUBMISSION_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const deleteSubmissionApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteSubmission: build.mutation({
            query: (id) => ({
                url: `${DELETE_SUBMISSION_URL}/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Submissions"]
        }),
    })
})

export const { useDeleteSubmissionMutation } = deleteSubmissionApi;