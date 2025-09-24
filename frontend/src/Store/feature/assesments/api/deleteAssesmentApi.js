import { DELETE_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";
import { localStorageKey_token } from "../../../../Utils";

export const deleteAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteAssesment: build.mutation({
            query: (id) => ({
                url: `${DELETE_ASSESMENT_URL}/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            invalidatesTags: ["Assesments"]
        }),
    })
})

export const { useDeleteAssesmentMutation } = deleteAssesmentApi;