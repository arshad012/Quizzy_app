import { useEffect } from "react"
import { useHeading } from "../../../../Hooks"
import { useGetSubmissionQuery } from "../../../../Store/feature/submissions/api"
import { useParams } from "react-router-dom"
import Loading from '../../../../Components/Common/Loading'

import StudentMatrics from "../../../../Components/Common/StudentMatrics"
import QuestionBreakdown from "../../../../Components/Common/QuestionBreakdown"
import { SubmissionTypes } from '../../../../Types'

function SubmissionPage() {
    const { setHeading, setSubHeading } = useHeading();
    const { id } = useParams();
    const { data = [], isLoading } = useGetSubmissionQuery(id, {
        skip: !id
    });

    useEffect(() => {
        setHeading('Submission');
        setSubHeading('You can view your score here');
    }, [])

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className="h-full bg-white overflow-auto">
            {data.status === SubmissionTypes.COMPLETED && <StudentMatrics data={data} />}
            <QuestionBreakdown data={data} />
        </div>
    )
}

export default SubmissionPage
