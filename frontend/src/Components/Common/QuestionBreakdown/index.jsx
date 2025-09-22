import QuestionAccordian from "./QuestionAccordian";
import { SubmissionTypes } from '../../../Types'

function QuestionBreakdown({ data }) {
    const questions = data?.assesmentId?.questions ?? [];
    const answers = data?.answers ?? [];

    return (
        <div className="mt-4">
            {data.status === SubmissionTypes.COMPLETED ? (
                <h2 className="text-lg font-semibold">QuestionBreakdown</h2>
            ) : (
                <h2 className="text-lg font-semibold">Your Answers</h2>
            )}

            <div className="flex flex-col gap-4">
                {
                    questions.map((question, index) => (
                        <QuestionAccordian
                            key={question._id}
                            question={question}
                            answers={answers}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionBreakdown
