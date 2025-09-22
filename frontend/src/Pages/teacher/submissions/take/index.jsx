import { useParams } from 'react-router-dom'
import { useGetAssesmentQuery } from '../../../../Store/feature/assesments/api/getAssesmentApi';
import Loading from '../../../../Components/Common/Loading';
import Progress from '../../../../Components/Student/TakeAssesment/Progress';
import { useHeading } from '../../../../Hooks';
import { useEffect } from 'react';
import AssesmentQuestion from '../../../../Components/Student/TakeAssesment/AssesmentQuestion';
import { useSelector } from 'react-redux';
import { assesmentsSelector } from '../../../../Store/feature/assesments/selectors';

function TakeAssesmentPage() {
    const { id } = useParams();
    const { title, description } = useSelector(assesmentsSelector);
    const { data, isLoading } = useGetAssesmentQuery(id, {
        skip: !id
    })

    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading(title || "Take Assesments");
        setSubHeading(description || "You can attemp you assesments here");
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex'>
            <AssesmentQuestion />
            <Progress />
        </div>
    )
}

export default TakeAssesmentPage
