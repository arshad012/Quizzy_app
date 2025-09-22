import { CheckCircle, Circle } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { setAssesmentKey } from "../../../../Store/feature/assesments/assesmentSlice";


function QuestionProgress({ index, question }) {
    const dispatch = useDispatch();
    const { answers, currentQuestionIndex } = useSelector(assesmentsSelector);
    let isAttempted = answers?.[question._id]?.response;

    const handleClick = () => {
        dispatch(
            setAssesmentKey({
                key: 'currentQuestionIndex',
                value: index
            })
        )
    }

    return (
        <div
            onClick={handleClick}
            className={`${index === currentQuestionIndex ? 'border border-blue-200 bg-blue-100' : ''} flex items-center gap-3 hover:bg-blue-50 cursor-pointer p-2 rounded-md`}>
            {isAttempted ? <CheckCircle color="green" size={17} /> : <Circle size={17} />} Qiestion {index + 1}
        </div>
    )
}

export default QuestionProgress
