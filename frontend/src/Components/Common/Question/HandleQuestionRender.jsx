import { QuestionTypes } from "../../../Types/index"
import LongAnswerQuestion from "./LongAnswerQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";

function HandleQuestionRender({ question, letUserAnswer = false }) {
    switch (question.type) {
        case QuestionTypes.MULTIPLE_CHOICE:
            return <MultipleChoiceQuestion 
                question={question} 
                letUserAnswer={letUserAnswer}
            />
        case QuestionTypes.SHORT_ANSWER:
            return <ShortAnswerQuestion 
                    letUserAnswer={letUserAnswer} 
                    question={question}
                />
        case QuestionTypes.LONG_ANSWER:
            return <LongAnswerQuestion 
                letUserAnswer={letUserAnswer} 
                question={question}
            />
        default:
            return null;
    }
}

export default HandleQuestionRender
