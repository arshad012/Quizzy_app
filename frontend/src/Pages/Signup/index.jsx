import { useEffect } from "react";
import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import SignupForm from "../../Components/SignupForm";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../Store/feature/appTheme/selector";

function Signup() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'white' : 'black';
    const textColor = quizzyAppColorMode === 'light' ? 'black' : 'white';
    const { setHeading } = useHeading();

    useEffect(() => {
        setHeading('SignUp');
    }, [])

    return (
        <div className={`bg-${bgColor} text-${textColor} h-screen overflow-auto`}>
            <Header className="h-16" />
            <SignupForm />
        </div>
    )
}

export default Signup