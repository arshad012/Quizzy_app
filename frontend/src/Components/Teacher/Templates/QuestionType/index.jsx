import { useDispatch, useSelector } from "react-redux";
import { templateSelector } from "../../../../Store/feature/template/selectors";
import { QuestionOptions } from "../../../../Utils/QuestionOptions"
import CustomInputs from "../../../Common/inputs/CustomeInputs"
import { InputTypes } from "../../../Common/inputs/CustomeInputs/types"
import { updateQuestionTypeData } from "../../../../Store/feature/template/templateSlice";
import { difficultyOptions } from "../../../../Utils/difficultyOptions";
import Options from "./Options";


function QuestionType({index}) {
    const dispatch = useDispatch();
    const { questionTypes } = useSelector(templateSelector);
    const questionType = questionTypes[index];

    const handleChange = (key, value) => {
        dispatch(
            updateQuestionTypeData({ index, key, value })
        )
    }

    if(!questionType) return null;

    const questionTitle = QuestionOptions.find(q => q.id === questionType.type)?.label;


    return (
        <div className="hover:shadow-md rounded-2xl p-3">
            <div className="border p-2 rounded-md">
                <h2 className="text-lg font-bold border-b pb-2">{questionTitle} settings</h2>
                
                <form className="space-y-4">
                    <div className="flex gap-5 mt-4">
                        <CustomInputs
                            inputType={InputTypes.TEXT}
                            label='Question Count'
                            placeholder={'e.g, 10'}
                            value={questionType.data.questionCount}
                            onChange={(value) => handleChange("questionCount", value)}
                            type='number'
                        />
                        <CustomInputs
                            inputType={InputTypes.TEXT}
                            label='Marks per Question'
                            placeholder={'e.g, 2'}
                            value={questionType.data.marksPerQuestion}
                            onChange={(value) => handleChange("marksPerQuestion", value)}
                            type='number'
                        />
                    </div>

                    <CustomInputs
                        inputType={InputTypes.DROP_DOWN}
                        options={difficultyOptions}
                        label='Difficulty level'
                        placeholder={'e.g, Easy'}
                        value={questionType.data.difficultyLevel}
                        onChange={(value) => handleChange("difficultyLevel", value)}
                    />

                    <CustomInputs
                        inputType={InputTypes.MULTILINE}
                        label='Custom AI prompt'
                        placeholder={'e.g, Make sure to have each question unique and not like the previous one.'}
                        value={questionType.data.customPrompts}
                        onChange={(value) => handleChange("customPrompts", value)}
                    />
                    
                    <Options index={index} />
                </form>
            </div>

            <hr className="my-5" />
        </div>
    )
}

export default QuestionType
