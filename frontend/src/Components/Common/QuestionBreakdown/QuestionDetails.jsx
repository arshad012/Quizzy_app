import { useParams } from "react-router-dom";
import { getAnswerStyling, getCorrectAnswer } from "./utils";
import { useGetSubmissionQuery } from "../../../Store/feature/submissions/api";
import { SubmissionTypes } from '../../../Types'
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";

function QuestionDetails({ question, answers, index }) {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-gray-100' : 'bg-gray-800';

    const answer = answers.find(answer => answer.questionId === question._id);
    const { id } = useParams();
    const { data = [] } = useGetSubmissionQuery(id, {
        skip: !id
    });
    const isCompleted = data.status === SubmissionTypes.COMPLETED;

    return (
        <div className={`p-2 rounded-md flex flex-col gap-2 border border-t-0 ${bgColor}`}>
            <div>
                <h3 className="font-semibold text-base">Question:</h3>
                {question.question}
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <h3 className="font-semibold text-base">Your Answer:</h3>
                    <p className={`${isCompleted ? getAnswerStyling(answer?.marksAwarded, question?.marks) : 'bg-gray-300'} p-2 rounded-lg`}>{answer?.response ?? "-Not Attempted-"}</p>
                </div>

                {isCompleted &&
                    <div>
                        <h3 className="font-semibold text-base">Correct Answer:</h3>
                        <p className={`bg-green-100 text-green-800 p-2 rounded-lg`}>{getCorrectAnswer(question)}</p>
                    </div>
                }
            </div>

            <div>
                {question?.explanations.length > 0 && isCompleted &&
                    <div className="bg-green-50 text-green-800 p-2 rounded-md border !border-green-300">
                        <h3 className="font-semibold text-base">Explanation:</h3>
                        {question.explanations?.map((explanation => (
                            <p>{explanation}</p>
                        )))}
                    </div>
                }

                {answer?.feedback && isCompleted &&
                    <div>
                        <h3 className="font-semibold text-base">Feedback:</h3>
                        <p>{answer.feedback}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default QuestionDetails
