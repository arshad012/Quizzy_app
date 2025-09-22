import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useAssesmentsData } from "./hooks/useAssesmentsData";
import { assesmentsColumns } from "./utils/assesmentsColumns";

import CustomButton from "../../../Components/Common/CustomButton";

function TeacherAssesmentsPage() {
    const navigate = useNavigate();
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Assesments');
        setSubHeading('Create and manahe your assesments here');
    }, [])

    const { rows = [], actions = [] } = useAssesmentsData();
    
    const handleClick = () => {
        navigate('/teacher/assesment/create');
    }

    return (
        <div className="h-full overflow-auto bg-white">
            <div>
                <div className="mb-2">
                    <CustomButton onClick={handleClick}> <PlusIcon size={20} />  Create Assesment</CustomButton>
                </div>

                <CustomTable
                    columns={assesmentsColumns}
                    data={rows}
                    actions={actions}
                    shouldShowActions={true}
                />
            </div>
        </div>
    )
}

export default TeacherAssesmentsPage
