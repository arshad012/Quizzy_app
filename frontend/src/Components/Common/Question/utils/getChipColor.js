import { DifficultyLevelTypes } from "../../../../Types";

export const getChipColor = difficultyLevel => {
    
    switch(difficultyLevel) {
        case DifficultyLevelTypes.EASY :
            return 'text-green-500'
        case DifficultyLevelTypes.MEDIUM :
            return 'text-blue-500'
        case DifficultyLevelTypes.HARD :
            return 'text-red-500'
        default :
            return ""
    }
}
