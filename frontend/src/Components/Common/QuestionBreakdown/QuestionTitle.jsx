import { ChevronLeft, ChevronRight } from "lucide-react";
import { getMarksStyling } from "./utils/getMarksStyling";
import { useGetSubmissionQuery } from "../../../Store/feature/submissions/api";
import { useParams } from "react-router-dom";
import { SubmissionTypes } from "../../../Types";

function QuestionTitle({ question, answers, index, onClick }) {
    const answer = answers.find(answer => answer.questionId === question._id);
    const { id } = useParams();
    const { data = [] } = useGetSubmissionQuery(id, {
        skip: !id
    });

    return (
        <div onClick={onClick} className="border p-4 rounded flex justify-between items-center gap-2 cursor-pointer hover:bg-gray-50 transition-all">
            <p title={question.question} className="flex-1 truncate">
                Q{index + 1}. {question.question}
            </p>

            {data.status === SubmissionTypes.COMPLETED &&
                <div className={`${getMarksStyling(answer?.marksAwarded, question.marks)} text-sm bg-gray-100 p-2 rounded-md w-fit shrink-0`}>
                    {answer?.marksAwarded} / {question.marks} {/*like 2 / 6 */}
                </div>
            }

            <div>
                <ChevronRight />
            </div>
        </div>
    )
}

export default QuestionTitle
