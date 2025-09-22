import { useNavigate } from "react-router-dom";
import { useDeleteSubmissionMutation, useGetAllSubmissionsQuery } from "../../../../Store/feature/submissions/api";
import { SubmissionStatusTypes } from "../../../../Types/SubmissionStatusTypes";
import { getRowIcon } from "../utils/index";
import { Trash2 } from "lucide-react";

export function useSubmissionsData() {
    const navigate = useNavigate();
    const { data = [] } = useGetAllSubmissionsQuery(undefined, {
        pollingInterval: 1000 * 60,
        refetchOnFocus: true
    });

    const [triggerDelete, { isLoading }] = useDeleteSubmissionMutation();

    const rows = data.map((submission) => ({
        ...submission,
        id: submission._id,
        assesment: submission.assesmentId?.title,
        score: submission.status === SubmissionStatusTypes.COMPLETED ? (
            <p>{submission.totalMarks} / {submission.maxMarks}</p>
        ) : (
            "-"
        )
    }))


    const actions = [
        {
            icon: (row) => getRowIcon(row.status),
            onClick: async (row) => {
                if (row.status === SubmissionStatusTypes.IN_PROGRESS) {
                    navigate(`/student/assesments/${row.assesmentId._id}?submissionId=${row._id}`);
                } else {
                    navigate(`/student/submissions/${row._id}`);
                }
            }
        },
        {
            icon: <Trash2 size={20} className="text-red-500" />,
            onClick: async (row) => {
                if(isLoading) return;
                triggerDelete(row._id);
            }
        }
    ]

    return { rows, actions }
}
