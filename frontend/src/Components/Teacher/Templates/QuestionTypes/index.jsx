import { useSelector } from "react-redux"
import QuestionType from "../QuestionType"
import { templateSelector } from "../../../../Store/feature/template/selectors"
import { appThemeSelector } from "../../../../Store/feature/appTheme/selector";

function QuestionTypes() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';

    const { questionTypes = [] } = useSelector(templateSelector);

    if(questionTypes.length === 0) return null;

    return (
        <div className={`flex flex-col gap-2 ${bgColor} ${textColor}`}>
            {
                questionTypes.map((_, i) => (
                    <QuestionType key={i} index={i} />
                ))
            }
        </div>
    )
}

export default QuestionTypes
