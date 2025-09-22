import { useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom'

import { useHeading } from "../../../Hooks"
import CustomButton from '../../../Components/Common/CustomButton'

function StudentDashboard() {
    const { setHeading, setSubHeading } = useHeading();
    const navigate = useNavigate();

    useEffect(() => {
        setHeading("Dashboard");
        setSubHeading("Student dashbord is here");
    }, [])

    return (
        <div className="h-full bg-white overflow-auto">
            <div>Student dashboard</div>
            <Link to={"/"}>
                <CustomButton>Home</CustomButton>
            </Link>
        </div>
    )
}

export default StudentDashboard
