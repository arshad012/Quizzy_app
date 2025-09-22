import { InputTypes } from "../types"

export const getLabelContainerStyling = ( inputType = InputTypes.TEXT ) => {

    switch (inputType) {
        case InputTypes.CHECKBOX:
        case InputTypes.RADIO:
            return 'w-fit'
        default:
            return ''
    }
}
