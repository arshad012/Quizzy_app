import { useEffect } from "react";
import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import SignupForm from "../../Components/SignupForm";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../Store/feature/appTheme/selector";

function Signup() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';
    const { setHeading } = useHeading();

    useEffect(() => {
        setHeading('SignUp');
    }, [])

    return (
        <div className={`${bgColor} ${textColor} h-screen overflow-auto`}>
            <Header className="h-16" />
            <SignupForm />
        </div>
    )
}

export default Signup