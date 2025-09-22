import { InputTypes, LabelPositionType } from "../types"

export const getLabelPosition = (inputType = InputTypes.TEXT) => {

    switch(inputType) {
        case InputTypes.CHECKBOX :
            return LabelPositionType.RIGHT
        case InputTypes.RADIO : 
            return LabelPositionType.LEFT
        default :
            return LabelPositionType.TOP
    }
}