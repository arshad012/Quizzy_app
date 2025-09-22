import { useEffect } from "react";
import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import { useSelector, useDispatch } from "react-redux";
import { loginSelector } from "../../Store/feature/Login/selector";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../Components/SignupForm";
import { resetSignupKey } from "../../Store/feature/SignUp/signupSlice";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setHeading, setSubHeading } = useHeading();
    const { userLoginInfo } = useSelector(loginSelector)

    
    useEffect(() => {
        setHeading('SignUp');
        setSubHeading('');
        if(userLoginInfo) {
            return navigate(`/${((userLoginInfo.userType).toLowerCase())}/dashboard`);
        }
    
        return () => dispatch(resetSignupKey());
    }, [userLoginInfo])

    return (
        <div>
            <Header />
            <SignupForm />
        </div>
    )
}

export default Signup