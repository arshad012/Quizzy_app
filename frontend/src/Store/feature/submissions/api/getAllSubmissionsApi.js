import { GET_ALL_SUBMISSIONS_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";
import { localStorageKey_token } from "../../../../Utils";

const getAllSubmissionsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllSubmissions: build.query({
            query: () => ({
                url: GET_ALL_SUBMISSIONS_URL,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(localStorageKey_token)}`
                }
            }),
            transformResponse: (response) => {
                return response.data ?? [];
            },
            providesTags: ["Submissions"],
        }),
    }),
});

export const { useGetAllSubmissionsQuery } = getAllSubmissionsApi;