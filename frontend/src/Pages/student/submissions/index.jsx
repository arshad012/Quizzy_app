import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useSubmissionsData } from "./hooks";
import { submissionsColumns } from "./utils";

// import { RotateCw } from "lucide-react";
// import '../../../App.css'


function StudentSubmissionsPage() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Submissions');
        setSubHeading('View all your submissions here');
    }, [])

    const { rows = [], actions = [] } = useSubmissionsData();

    return (
        <div className="h-full bg-white overflow-auto">
            <h1 className="text-center font-bold text-2xl text-gray-500 py-4">All Submissions</h1>
            <CustomTable
                columns={submissionsColumns}
                data={rows}
                actions={actions}
                shouldShowActions={true}
            />
        </div>
    )
}

export default StudentSubmissionsPage


/*
const loaderPositionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: isLoading ? 'block' : 'none'
}

<div style={loaderPositionStyle}>
    <RotateCw size={60} className="animate-spin text-gray-500" />
</div>
 */