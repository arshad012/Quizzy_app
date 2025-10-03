import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useAssesmentsData } from "./hooks/useAssesmentsData";
import { assesmentsColumns } from "./utils/assesmentsColumns";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";
import { useSelector } from "react-redux";

function StudentAssesmentsPage() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'white' : 'black';
    const textColor = quizzyAppColorMode === 'light' ? 'black' : 'white';

    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Assessments');
        setSubHeading('Take and manage your assessments here');
    }, [])

    const { rows, actions, error } = useAssesmentsData();

    if (error && (error?.data?.message)?.toLowerCase() === 'jwt expired') {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className={`h-full bg-${quizzyAppColorMode === 'light' ? 'white' : 'black'} overflow-auto`}>
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
