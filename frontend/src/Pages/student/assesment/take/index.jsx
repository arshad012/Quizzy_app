import { useParams } from 'react-router-dom'
import { useGetAssesmentQuery } from '../../../../Store/feature/assesments/api/getAssesmentApi';
import Loading from '../../../../Components/Common/Loading';
import Progress from '../../../../Components/Student/TakeAssesment/Progress';
import { useHeading } from '../../../../Hooks';
import { useEffect } from 'react';
import AssesmentQuestion from '../../../../Components/Student/TakeAssesment/AssesmentQuestion';
import { useSelector } from 'react-redux';
import { assesmentsSelector } from '../../../../Store/feature/assesments/selectors';
import AuthFailed from '../../../../Components/AuthFailed';
import SomethingWrong from '../../../../Components/SomethingWrong';

function TakeAssesmentPage() {
    const { id } = useParams();
    const { title = '', description = '' } = useSelector(assesmentsSelector);
    const { data, isLoading, error } = useGetAssesmentQuery(id, {
        skip: !id
    })

    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading(title ?? "Take Assesments");
        setSubHeading(description ?? "You can attempt your assesment here");
    }, [title, description])

    if (isLoading) {
        return <Loading />
    }
    if (error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className='flex h-full bg-white overflow-auto'>
            <AssesmentQuestion />
            <Progress />
        </div>
    )
}

export default TakeAssesmentPage
