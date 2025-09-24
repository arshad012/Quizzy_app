import { TrashIcon, EyeIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useGetAllAssesmentsQuery, useDeleteAssesmentMutation } from "../../../../Store/feature/assesments/api";


export function useAssesmentsData() {
    const navigate = useNavigate();
    const { data: assesments = [], error } = useGetAllAssesmentsQuery();
    const [triggerDelete] = useDeleteAssesmentMutation();
    
    const rows = assesments.map((assesment) => (
        {
            ...assesment,
            template: assesment?.template ? (
                <Link to={`/teacher/templates/${assesment.template._id}`} className="text-blue-500 hover:text-blue-600 cursor-pointer underline">
                    {assesment?.template?.title}
                </Link>
            ) : null,
            id: assesment._id,
        }
    ));

    const actions = [
        {
            icon: <EyeIcon size={20} className="text-blue-500"/>,
            onClick: (row) => {
                navigate(`/teacher/assesment/${row.id}`);
            }
        },
        {
            icon: <TrashIcon size={20} className="text-red-500"/>,
            onClick: (row) => {
                triggerDelete(row._id)
            }
        },
    ]

    return { rows, actions, error }
}
