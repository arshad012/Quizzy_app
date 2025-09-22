import { DELETE_SUBMISSION_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const deleteSubmissionApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteSubmission: build.mutation({
            query: (id) => ({
                url: `${DELETE_SUBMISSION_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Submissions"]
        }),
    })
})

export const { useDeleteSubmissionMutation } = deleteSubmissionApi;
