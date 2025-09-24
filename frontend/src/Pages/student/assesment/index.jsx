import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useAssesmentsData } from "./hooks/useAssesmentsData";
import { assesmentsColumns } from "./utils/assesmentsColumns";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";

function StudentAssesmentsPage() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Assesments');
        setSubHeading('Take and manahe your assesments here');
    }, [])

    const { rows, actions, error } = useAssesmentsData();

    if (error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

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
