import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useAssesmentsData } from "./hooks/useAssesmentsData";
import { assesmentsColumns } from "./utils/assesmentsColumns";


function StudentAssesmentsPage() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Assesments');
        setSubHeading('Take and manahe your assesments here');
    }, [])

    const { rows, actions } = useAssesmentsData();

    return (
        <div className="h-full bg-white overflow-auto">
            <CustomTable
                columns={assesmentsColumns}
                data={rows}
                actions={actions}
                shouldShowActions={true}
            />
        </div>
    )
}

export default StudentAssesmentsPage
