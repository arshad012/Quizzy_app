import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

import { useHeading } from "../../../Hooks"
import CustomButton from "../../../Components/Common/CustomButton";

function TeacherDashboard() {
    const { setHeading, setSubHeading } = useHeading();
    const navigate = useNavigate();

    useEffect(() => {
        setHeading("Dashboard");
        setSubHeading("Teacher dashbord is here");
    }, [])

    const handleClick = () => {
        navigate("/teacher-home");
    }

    return (
        <div className="h-full overflow-auto bg-white">
            <div className="mb-2">
                <CustomButton onClick={handleClick}>Home</CustomButton>
            </div>
            <div>Teacher dashboard</div>
        </div>
    )
}

export default TeacherDashboard
