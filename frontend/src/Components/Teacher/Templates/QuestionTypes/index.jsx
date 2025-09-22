import { useSelector } from "react-redux"
import QuestionType from "../QuestionType"
import { templateSelector } from "../../../../Store/feature/template/selectors"


function QuestionTypes() {
    const { questionTypes = [] } = useSelector(templateSelector);

    if(questionTypes.length === 0) return null;

    return (
        <div className="flex flex-col gap-2">
            {
                questionTypes.map((_, i) => (
                    <QuestionType key={i} index={i} />
                ))
            }
        </div>
    )
}

export default QuestionTypes
