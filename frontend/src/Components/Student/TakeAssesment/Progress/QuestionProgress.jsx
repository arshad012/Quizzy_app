import { CheckCircle, Circle } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { setAssesmentKey } from "../../../../Store/feature/assesments/assesmentSlice";
import { appThemeSelector } from "../../../../Store/feature/appTheme/selector";


function QuestionProgress({ index, question }) {
    const dispatch = useDispatch();
    const { answers, currentQuestionIndex } = useSelector(assesmentsSelector);
    let isAttempted = answers?.[question._id]?.response;

    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const hoverEffect = quizzyAppColorMode === 'light' ? 'hover:bg-blue-50' : 'hover:bg-gray-800';
    
    let activeQuestionStyle = "";
    if(index === currentQuestionIndex && quizzyAppColorMode === 'light') {
        activeQuestionStyle = "border border-blue-200 bg-blue-100";
    }
    else if(index === currentQuestionIndex && quizzyAppColorMode === 'dark') {
        activeQuestionStyle = "border border-gray-900 bg-gray-800";
    }

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
            className={`${activeQuestionStyle} flex items-center gap-3 cursor-pointer p-2 rounded-md ${hoverEffect}`}>
            {isAttempted ? <CheckCircle color="green" size={17} /> : <Circle size={17} />} Qiestion {index + 1}
        </div>
    )
}

export default QuestionProgress
