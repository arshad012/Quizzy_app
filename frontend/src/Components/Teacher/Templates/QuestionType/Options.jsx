import { useDispatch, useSelector } from "react-redux"
import CustomInputs from "../../../Common/inputs/CustomeInputs"
import { InputTypes } from "../../../Common/inputs/CustomeInputs/types"
import { templateSelector } from "../../../../Store/feature/template/selectors"
import { updateQuestionTypeOptions } from "../../../../Store/feature/template/templateSlice"
import { getQuestionTypeOptions } from "./Utils/getQuestionTypeOptions"


function Options({ index }) {
    const dispatch = useDispatch();
    const { questionTypes } = useSelector(templateSelector);
    const questionType = questionTypes[index];
    
    const options = getQuestionTypeOptions(questionType.type);

    const handleChange = (key, value) => {
        dispatch(
            updateQuestionTypeOptions({index, key, value})
        )
    }

    return (
        <div>
            <h2 className="font-bold text-2xl">Options</h2>

            <div>
                {
                    options.map((option) => (
                        <CustomInputs
                            key={option.id}
                            id={option.id+index}
                            inputType={InputTypes.CHECKBOX}
                            label={option.label}
                            value={questionType.data.options[option.id]}
                            onChange={(value) => handleChange(option.id, value)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Options
