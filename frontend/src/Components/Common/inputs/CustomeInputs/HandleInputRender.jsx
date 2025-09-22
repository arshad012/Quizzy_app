import CustomCheckbox from "../CustomCheckbox"
import CustomDropDownInput from "../CustomDropdownInput"
import CustomTextArea from "../CustomTextArea"
import CustomTextInput from "../CustomTextInput"
import CustomNumberInput from '../CustomNumberInput'
import { InputTypes } from "./types"
import CustomRadioInputs from "../CustomRadioInputs"


function HandleInputRender({inputType, ...props}) {
    switch(inputType) {
        case InputTypes.TEXT :
            return <CustomTextInput {...props} />
        case InputTypes.MULTILINE : 
            return <CustomTextArea {...props} />
        case InputTypes.DROP_DOWN :
            return <CustomDropDownInput {...props} />
        case InputTypes.CHECKBOX : 
            return <CustomCheckbox {...props} />
        case InputTypes.NUMBER :
            return <CustomNumberInput {...props} />
        case InputTypes.RADIO :
            return <CustomRadioInputs {...props} />
    }
}

export default HandleInputRender