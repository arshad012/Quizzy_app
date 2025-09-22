import { DifficultyLevelTypes, QuestionTypes } from "../../../../Types"


export const getEmptyQuestion = (type = QuestionTypes.MULTIPLE_CHOICE) => {

    return {
        type,
        data: {
            questionCount: 0,
            marksPerQuestion: 0,
            difficultyLevel: DifficultyLevelTypes.EASY,
            customPrompts: "",
            options: {
                includeHints: false,
                includeExplanation: false,
                shuffleOptions: false,
                enableNegativeMarking: false,
                negativeScore: 0
            }
        }
    }
}
