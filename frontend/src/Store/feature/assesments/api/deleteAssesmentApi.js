import { DELETE_ASSESMENT_URL } from "../../../../constants/api";
import { apiSlice } from "../../../api";


export const deleteAssesmentApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteAssesment: build.mutation({
            query: (id) => ({
                url: `${DELETE_ASSESMENT_URL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Assesments"]
        }),
    })
})

export const { useDeleteAssesmentMutation } = deleteAssesmentApi;

