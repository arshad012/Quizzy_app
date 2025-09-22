import { getQuestionOptionPrefix } from '../utils/index'
import { useDispatch, useSelector } from 'react-redux'
import { assesmentsSelector } from '../../../../Store/feature/assesments/selectors';
import { addAnswer } from '../../../../Store/feature/assesments/assesmentSlice';

function MultipleChoiceQuestion({ question }) {
    const { answers } = useSelector(assesmentsSelector);
    const selectedOption = answers[question._id]?.response;
    const dispatch = useDispatch();
    
    const options = question.options || [];
    
    if(options.length === 0) return;
    
    const handleSelect = (option) => {
        if(selectedOption === option.label) setSelectedOption(null)
            else setSelectedOption(option);
    }
    
    const setSelectedOption = option => {
        dispatch(
            addAnswer(
                { 
                    questionId: question._id, 
                    response: option?.label 
                }
            )
        )
    }
    

    return (
        <div className="flex flex-col gap-4">
            {options.map((option, i) => (
                <div
                    onClick={() => handleSelect(option)}
                    key={option.label}
                    className={`${selectedOption === option.label ? "bg-blue-200 text-blue-800" : ""} flex items-center gap-5 border border-gray-300 hover:border-gray-600 p-4 text-sm rounded-md cursor-pointer transition-all`}>
                    <span>{getQuestionOptionPrefix(i)}</span>{option.label}
                </div>
            ))}
        </div>
    )
}

export default MultipleChoiceQuestion
