import CustomInputs from "../../inputs/CustomeInputs"
import { InputTypes } from "../../inputs/CustomeInputs/types"
import { useDispatch, useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { addAnswer } from "../../../../Store/feature/assesments/assesmentSlice";


function ShortAnswerQuestion({ question, letUserAnswer }) {
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
                inputType={InputTypes.TEXT}
                value={currentAnswer || ''}
                placeholder="Enter yout Answer..."
                onChange={setAnswer}
                disabled={!letUserAnswer}
            />
        </div>
    )
}

export default ShortAnswerQuestion
