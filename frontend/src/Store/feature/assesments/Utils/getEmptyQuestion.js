import { DifficultyLevelTypes, QuestionTypes } from "../../../../Types"


export const getEmptyQuestion = (type = QuestionTypes.MULTIPLE_CHOICE) => {

    console.log('getEmptyQuestion called');
    
    let obj = {
        type,
        data: {
            label: "",
            questionCount: 0,
            marksPerQuestion: 0,
            difficultyLevel: DifficultyLevelTypes.EASY,
            customPrompts: "",
            options: {
                includeHints: false,
                includeExplaination: false,
                shuffleOptions: false,
                enableNegativeMarking: false,
                negativeScore: 0
            }
        }
    }

    console.log('obj', obj);

    return obj;
}