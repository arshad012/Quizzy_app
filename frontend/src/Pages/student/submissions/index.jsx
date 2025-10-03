import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useSubmissionsData } from "./hooks";
import { submissionsColumns } from "./utils";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";


function StudentSubmissionsPage() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'white' : 'black';

    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Submissions');
        setSubHeading('View all your submissions here');
    }, [])

    const { rows = [], actions = [], error } = useSubmissionsData();

    if (error && (error?.data?.message)?.toLowerCase() === 'jwt expired') {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className={`h-full bg-${bgColor} overflow-auto`}>
            <h1 className={`text-center font-bold text-2xl ${quizzyAppColorMode === 'light' ? 'text-gray-500' : 'text-gray-300'} py-4`}>All Submissions</h1>
            
            <CustomTable
                columns={submissionsColumns}
                data={rows}
                actions={actions}
                shouldShowActions={true}
            />
        </div>
    )
}

export default StudentSubmissionsPage;