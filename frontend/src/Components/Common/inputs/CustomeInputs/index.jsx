import HandleInputRender from "./HandleInputRender";
import handleLabelPosition from "./Utils/handleLabelPosition";
import { getLabelPosition } from "./Utils/getLabelPosition";
import { getLabelContainerStyling } from "./Utils/getLabelContainerStyling";

function CustomInputs(props) {
    const { 
            id, 
            label, 
            labelposition = getLabelPosition(props.inputType), 
            showLabel = true ,
            labelContainerClassName = getLabelContainerStyling(props.inputType)
        } = props;
        

    return (
        <div className="w-full">
            <div className={`${labelContainerClassName} ${handleLabelPosition(labelposition)} flex gap-1`}>
                {showLabel && label && (
                    <label htmlFor={id} className="shrink-0">{label}</label>
                )}
                <HandleInputRender {...props} />
            </div>
        </div>
    )
}

export default CustomInputs
