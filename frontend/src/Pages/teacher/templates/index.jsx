import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";

import { templatesColumns } from "./utils";
import { useTemplatesData } from "./hooks/useTemplatesData";

import CustomButton from "../../../Components/Common/CustomButton";

function TeacherTemplatesPage() {

    const navigate = useNavigate();
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Templates');
        setSubHeading('Create fresh templates here');
    }, [])

    const { rows = [], actions = [] } = useTemplatesData();

    const handleClick = () => {
        navigate('/teacher/templates/create');
    }


    return (
        <div className="h-full overflow-auto bg-white">
            <div className="mb-2">
                <CustomButton onClick={handleClick}>Create Template</CustomButton>
            </div>

            <CustomTable 
                columns={templatesColumns} 
                data={rows} 
                actions={actions} 
                shouldShowActions={true}
            />
        </div>
    )
}

export default TeacherTemplatesPage
