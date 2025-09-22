import { useSelector } from "react-redux";
import Question from "../../../Common/Question"
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { defaultQuestionConfig } from "../../../Common/Question/utils";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import ChipsComponent from "../../../Common/Question/components/ChipsComponent";

function AssesmentQuestion() {
    const { questions, currentQuestionIndex } = useSelector(assesmentsSelector);    

    return (
        <main className='items-start flex-1 h-full pr-2 pl-0 overflow-auto'>
            <div>
                <div className="mb-5">
                    <ChipsComponent question={questions[currentQuestionIndex]} index={currentQuestionIndex} />
                </div>
                
                <Question
                    question={questions[currentQuestionIndex]}
                    currentQuestionIndex={currentQuestionIndex}
                    config={
                        { 
                            ...defaultQuestionConfig, 
                            showAnswer: false, 
                            showExplanation: false,
                        }
                    }
                />
            </div>

            <div className="flex gap-5 items-center justify-end my-5">
                <PreviousButton />                
                <NextButton />
            </div>
        </main>
    )
}

export default AssesmentQuestion
