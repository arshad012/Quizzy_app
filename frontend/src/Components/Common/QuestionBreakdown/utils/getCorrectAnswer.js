import { QuestionTypes } from '../../../../Types'

export const getCorrectAnswer = (question) => {

    switch (question.type) {
        case QuestionTypes.MULTIPLE_CHOICE :
            return question.options.find(op => op.isCorrect)?.label;
        case QuestionTypes.LONG_ANSWER :
        case QuestionTypes.SHORT_ANSWER :
            return question.sampleAnswer
        default :
            return "N/A"
    }

}