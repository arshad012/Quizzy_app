import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { useDeleteTemplateMutation, useGetAllTemplatesQuery } from "../../../../Store/feature/template/api"


export function useTemplatesData() {
    const navigate = useNavigate();
    const { data = [] } = useGetAllTemplatesQuery();
    const [ triggerDelete ] = useDeleteTemplateMutation();
    
    
    const rows = data.map((template) => {
        
        return {
            ...template,
            title: template.title,
            subject: template.subject,
            gradeLevel: template.gradeLevel,
            id: template._id
        }
    })

    const actions = [
        {
            icon: <EyeIcon size={20} className="text-green-500" />,
            onClick: (row) => {
                navigate(`/teacher/templates/${row._id}`);
            }
        },
        {
            icon: <EditIcon size={20} className="text-blue-500" />,
            onClick: (row) => {
                alert("Edit feature is coming soon...");
            }
        },
        {
            icon: <DeleteIcon size={20} className="text-red-500" />,
            onClick: (row) => {
                triggerDelete(row._id);
            }
        },
    ]

    return { rows, actions }
}
