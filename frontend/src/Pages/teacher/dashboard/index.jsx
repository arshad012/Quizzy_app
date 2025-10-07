import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

import { useHeading } from "../../../Hooks"
import CustomButton from "../../../Components/Common/CustomButton";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";

function TeacherDashboard() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';
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
        <div className={`h-full overflow-auto ${bgColor} ${textColor}`}>
            <div className="mb-2">
                <CustomButton onClick={handleClick}>Home</CustomButton>
            </div>
            <div>Teacher dashboard</div>
        </div>
    )
}

export default TeacherDashboard
