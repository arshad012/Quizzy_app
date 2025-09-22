import { useDispatch } from "react-redux";
import { PlusIcon } from "lucide-react";

import CustomInputs from "../../../../Common/inputs/CustomeInputs";
import { InputTypes } from "../../../../Common/inputs/CustomeInputs/types";
import { QuestionOptions } from "../../../../../Utils/QuestionOptions";
import { addNewQuestionType } from "../../../../../Store/feature/template/templateSlice";

function AddQuestionType() {
    const dispatch = useDispatch();

    const handleAddQuestionType = value => {
        dispatch(
            addNewQuestionType({questionType : value})
        )
    }

    return (
        <div className="bg-blue-200 mt-5 rounded-md hover:shadow-lg">
            <CustomInputs
                inputType={InputTypes.DROP_DOWN}
                onChange={handleAddQuestionType}
                options={QuestionOptions}
                value={
                    <div className="flex items-center gap-2 text-sm cursor-pointer">
                        <PlusIcon size={16} /> {" "} Add a question type
                    </div>
                }
                showLabel={false}
            />
        </div>
    )
}

export default AddQuestionType
