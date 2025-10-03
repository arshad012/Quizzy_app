import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useSubmissionsData } from "./hooks";
import { submissionsColumns } from "./utils";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";

function TeacherSubmissionsPage() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);

    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Submissions');
        setSubHeading('View all your submissions here');
    }, [])

    const { rows, actions, error } = useSubmissionsData();

    if (error && (error?.data?.message)?.toLowerCase() === 'jwt expired') {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className={`h-full overflow-auto bg-${quizzyAppColorMode === 'light' ? 'white' : 'black'}`}>
            <div>
                <CustomTable
                    columns={submissionsColumns}
                    data={rows}
                    actions={actions}
                    shouldShowActions={true}
                />
            </div>
        </div>
    )
}

export default TeacherSubmissionsPage
