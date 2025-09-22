import { useSelector } from "react-redux";
import { QuestionOptions } from "../../../../Utils/QuestionOptions"
import { ChipTypes } from "../../ChipComponent/types"
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import ChipComponent from '../../../Common/ChipComponent'
import { getChipColor } from "../utils";

function ChipsComponent({ question, index }) {
    const { questions = [] } = useSelector(assesmentsSelector);

    return (
        <div className="flex gap-5">
            <ChipComponent text={`Question ${index + 1} of ${questions.length}`} type={ChipTypes.PRIMARY} />
            
            <ChipComponent text={QuestionOptions.find(op => op.id === question.type).label} type={ChipTypes.SECONDARY} />
            
            <ChipComponent className={getChipColor(question.difficultyLevel)} text={question.difficultyLevel} type={ChipTypes.PRIMARY} />
        </div>
    )
}

export default ChipsComponent
