import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { templatesColumns } from "./utils";
import { useTemplatesData } from "./hooks/useTemplatesData";
import CustomButton from "../../../Components/Common/CustomButton";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";

function TeacherTemplatesPage() {

    const navigate = useNavigate();
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Templates');
        setSubHeading('Create fresh templates here');
    }, [])

    const { rows = [], actions = [], error } = useTemplatesData();

    const handleClick = () => {
        navigate('/teacher/templates/create');
    }

    if(error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    } 
    else if(error) {
        return <SomethingWrong />;
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
