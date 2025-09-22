import { ChevronRight, Loader, Save } from "lucide-react"
import CustomButton from "../../../Common/CustomButton"
import { useDispatch, useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { setAssesmentKey } from "../../../../Store/feature/assesments/assesmentSlice";
import { useSubmitAssesmentMutation } from "../../../../Store/feature/submissions/api/submitAssesment";
import { useSearchParams, useNavigate } from "react-router-dom";


function NextButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions, currentQuestionIndex, answers } = useSelector(assesmentsSelector);
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const [searchParams, setSearchParams] = useSearchParams();
    const submissionId = searchParams.get('submissionId');
    const [triggerSubmitAssesment, { isLoading }] = useSubmitAssesmentMutation();
    

    const handleNext = async () => {
        if (isLoading) return

        if(!submissionId) {
            console.error('submission ID not found');
            return;
        }

        if (isLastQuestion) {
            try {
                const data = await triggerSubmitAssesment({
                    id: submissionId,
                    body: {
                        responses: Object.entries(answers).map(([key, value]) => ({
                            questionId: key,
                            response: value.response
                        }))
                    }
                }).unwrap()
    
                navigate('/student/submissions');
                
            } catch (error) {
                console.error('Error while submitiing assessment :', error);
            }

            return;
        }


        dispatch(
            setAssesmentKey({
                key: "currentQuestionIndex",
                value: currentQuestionIndex + 1
            })
        )
    }


    return (
        <CustomButton
            className="disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleNext}>
            {isLastQuestion ? "Save" : "Next"}
            {isLoading ? <Loader size={20} className="animate-spin mx-1" /> : isLastQuestion ? <Save /> : <ChevronRight />}
        </CustomButton>
    )
}

export default NextButton
