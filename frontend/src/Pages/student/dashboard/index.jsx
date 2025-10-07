import { useEffect } from "react"
import { Link } from 'react-router-dom'

import { useHeading } from "../../../Hooks"
import CustomButton from '../../../Components/Common/CustomButton'
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";
import { useSelector } from "react-redux";

function StudentDashboard() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading("Dashboard");
        setSubHeading("Student dashbord is here");
    }, [])

    return (
        <div className={`h-full overflow-auto ${bgColor} ${textColor}`}>
            <div>Student dashboard</div>
            <Link to={"/student-home"}>
                <CustomButton>Home</CustomButton>
            </Link>
        </div>
    )
}

export default StudentDashboard;