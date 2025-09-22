import { Loader, Play } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { useGetAllAssesmentsQuery } from "../../../../Store/feature/assesments/api";
import { useStartAssesmentMutation } from '../../../../Store/feature/submissions/api'


export function useAssesmentsData() {
    const navigate = useNavigate();
    const { data = [] } = useGetAllAssesmentsQuery();
    const [triggerStartAssesment, { isLoading }] = useStartAssesmentMutation();

    const rows = data.map((assesment) => ({
        ...assesment,
        id: assesment._id,
    }))

    const actions = [
        {
            icon: isLoading ? (<Loader size={20} className="animate-spin" />) : (<Play size={20} className="text-blue-500" />),
            onClick: async (row) => {
                if (isLoading) return;

                const data = await triggerStartAssesment({
                    assesmentId: row._id
                }).unwrap();

                navigate(`/student/assesments/${row._id}?submissionId=${data.submission?._id}`);
            }
        },
    ]

    return { rows, actions }
}
