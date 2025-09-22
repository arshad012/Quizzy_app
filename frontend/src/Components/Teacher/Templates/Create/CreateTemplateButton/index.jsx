import { Save } from 'lucide-react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { useCreateTemplateMutation } from "../../../../../Store/feature/template/api"
import { templateSelector } from "../../../../../Store/feature/template/selectors";
import { stateToTemplate } from "../../../../../Store/feature/template/Utils/parser";
import CustomButton from "../../../../Common/CustomButton"


function CreateTemplateButton() {
    const navigate = useNavigate();
    const [ triggerCreate, { isLoading }] = useCreateTemplateMutation();
    const template = useSelector(templateSelector);
    
    const handleClick = async () => {

        if(isLoading) return;
        try {
            await triggerCreate(stateToTemplate(template)).unwrap();
            navigate('/teacher/templates');
        } catch (error) {
            console.log('There was an error while creating template, error:', error)
        }
    }

    return (
        <CustomButton disabled={isLoading} className="mt-2" onClick={handleClick}>
            <Save size={15} /> Save Template
        </CustomButton>
    )
}

export default CreateTemplateButton
