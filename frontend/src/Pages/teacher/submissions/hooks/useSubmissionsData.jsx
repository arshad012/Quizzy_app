import { EyeIcon } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { useGetAllSubmissionsQuery } from "../../../../Store/feature/submissions/api";


export function useSubmissionsData() {
    const navigate = useNavigate();
    const { data = [], error } = useGetAllSubmissionsQuery();
    

    const rows = data.map((submission) => ({
        ...submission,
        id: submission._id,
        assesment: submission.assesmentId?.title
    }))


    const actions = [
        {
            icon: <EyeIcon size={20} className="text-blue-500" />,
            onClick: (row) => {
                navigate(`/student/submissions/${row._id}`);
            }
        },
    ]

    return { rows, actions, error }
}
