import { useEffect } from "react"
import { Link } from 'react-router-dom'

import { useHeading } from "../../../Hooks"
import CustomButton from '../../../Components/Common/CustomButton'

function StudentDashboard() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading("Dashboard");
        setSubHeading("Student dashbord is here");
    }, [])

    return (
        <div className="h-full bg-white overflow-auto">
            <div>Student dashboard</div>
            <Link to={"/student-home"}>
                <CustomButton>Home</CustomButton>
            </Link>
        </div>
    )
}

export default StudentDashboard;