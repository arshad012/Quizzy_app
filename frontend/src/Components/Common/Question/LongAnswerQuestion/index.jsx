import CustomInputs from "../../inputs/CustomeInputs";
import { InputTypes } from "../../inputs/CustomeInputs/types";
import { useDispatch, useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { addAnswer } from "../../../../Store/feature/assesments/assesmentSlice";

function LongAnswerQuestion({ question, letUserAnswer }) {
    const dispatch = useDispatch();
    const { answers } = useSelector(assesmentsSelector);
    const currentAnswer = answers[question._id]?.response;

    const setAnswer = answer => {
        dispatch(
            addAnswer({
                questionId: question._id,
                response: answer
            })
        )
    }

    return (
        <div>
            <CustomInputs
                inputType={InputTypes.MULTILINE}
                value={currentAnswer || ''}
                placeholder="Enter yout detailed Answer..."
                onChange={setAnswer}
                disabled={!letUserAnswer}
            />
        </div>
    )
}

export default LongAnswerQuestion
