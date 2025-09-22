import { EyeIcon, FilePenLine } from "lucide-react"
import { SubmissionStatusTypes } from '../../../../Types/SubmissionStatusTypes'

export const getRowIcon = status => {
    
    switch(status) {
        case SubmissionStatusTypes.SUBMITTED :
        case SubmissionStatusTypes.COMPLETED :
            return <EyeIcon size={20} className="text-blue-500" />
        case SubmissionStatusTypes.IN_PROGRESS :
            return <FilePenLine size={20} className="text-green-500" />
        default :
            return null;
    }
}
