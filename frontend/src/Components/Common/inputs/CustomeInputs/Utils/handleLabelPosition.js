import { LabelPositionType } from "../types"

function handleLabelPosition(labelPosition = LabelPositionType.TOP) {
    
    switch(labelPosition) {
        case LabelPositionType.LEFT :
            return 'flex-row'
        
        case LabelPositionType.RIGHT :
            return 'flex-row-reverse justify-start'
        
            case LabelPositionType.TOP :
        default :
            return 'flex-col'
    }
}

export default handleLabelPosition
