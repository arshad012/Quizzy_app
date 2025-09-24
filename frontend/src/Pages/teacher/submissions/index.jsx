import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useSubmissionsData } from "./hooks";
import { submissionsColumns } from "./utils";
import AuthFailed from "../../../Components/AuthFailed";
import SomethingWrong from "../../../Components/SomethingWrong";


function TeacherSubmissionsPage() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Submissions');
        setSubHeading('View all your submissions here');
    }, [])

    const { rows, actions, error } = useSubmissionsData();

    if (error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className="h-full overflow-auto bg-white">
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
