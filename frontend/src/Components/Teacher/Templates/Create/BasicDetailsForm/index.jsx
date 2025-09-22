import CustomInputs from "../../../../Common/inputs/CustomeInputs"
import { InputTypes, LabelPositionType } from "../../../../Common/inputs/CustomeInputs/types"

import { useDispatch, useSelector } from 'react-redux';
import { templateSelector } from "../../../../../Store/feature/template/selectors";
import { setTemplateKey } from "../../../../../Store/feature/template/templateSlice";


function TemplatesBasicDetailsForm() {
    const dispatch = useDispatch();
    const {title ,description ,subject ,gradeLevel} = useSelector(templateSelector);

    const handleChange = (key, value) => {

        dispatch(
            setTemplateKey({key, value})
        )
    }


    return (
        <div>
            <div className="border rounded-xl p-3">
                <h1 className="font-bold text-2xl border-b mb-4 pb-2">Basic Details</h1>

                <form className="flex flex-col gap-4">
                    <CustomInputs
                        inputType={InputTypes.TEXT}
                        onChange={(value) => handleChange('title', value)}
                        value={title}
                        placeholder={'Enter Title'}
                        label='Title'
                        name='title'
                    />
                    <CustomInputs
                        inputType={InputTypes.MULTILINE}
                        onChange={(value) => handleChange('description', value)}
                        value={description}
                        placeholder='Provide a description of new assesment...'
                        label='Description'
                        name='description'
                    />

                    <div className="flex gap-5">
                        <CustomInputs
                            // labelposition={LabelPositionType.LEFT}
                            inputType={InputTypes.TEXT}
                            onChange={(value) => handleChange('subject', value)}
                            value={subject}
                            placeholder={'e.g, Math, Science, Phycology...'}
                            label='Subject'
                            name='subject'
                        />
                        <CustomInputs
                            // labelposition={LabelPositionType.LEFT}
                            inputType={InputTypes.TEXT}
                            onChange={(value) => handleChange('gradeLevel', value)}
                            value={gradeLevel}
                            placeholder={'B Tech...'}
                            label='Grade Level'
                            name='gradeLavel'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TemplatesBasicDetailsForm
