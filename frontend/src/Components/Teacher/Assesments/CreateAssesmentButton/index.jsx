import { Save, Loader2 } from 'lucide-react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { assesmentsSelector } from '../../../../Store/feature/assesments/selectors';
import CustomButton from "../../../Common/CustomButton"

import { useCreateAssesmentUsingAIMutation } from '../../../../Store/feature/assesments/api/createAssesmentUsingAiApi';

function CreateAssesmentButton() {
    const navigate = useNavigate();
    const [ triggerCreate, { isLoading }] = useCreateAssesmentUsingAIMutation();
    const assesment = useSelector(assesmentsSelector);
    
    const handleClick = async () => {
        if(isLoading) return;

        try {
            await triggerCreate(assesment).unwrap();
            navigate('/teacher/assesment');
        } catch (error) {
            console.log('Tehre was an error while creating assesment, error:', error)
        }
    }

    return (
        <CustomButton disabled={isLoading} className="my-2 w-fit disabled:opacity-50 disabled:cursor-wait" onClick={handleClick}>
            {isLoading ? (
                <Loader2 size={20} className='animate-spin' /> 
            ) : ( 
            <Save size={15} />
            )} Save Assesment
        </CustomButton>
    )
}

export default CreateAssesmentButton
