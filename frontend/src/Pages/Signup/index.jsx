import { useEffect } from "react";
import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import SignupForm from "../../Components/SignupForm";

function Signup() {
    const { setHeading } = useHeading();

    useEffect(() => {
        setHeading('SignUp');
    }, [])

    return (
        <div>
            <Header />
            <SignupForm />
        </div>
    )
}

export default Signup