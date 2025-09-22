import { useEffect } from "react";
import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import { useDispatch, useSelector } from "react-redux";
import { loginSelector } from "../../Store/feature/Login/selector";

import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm";
import { resetLoginKey } from "../../Store/feature/Login/loginSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setHeading, setSubHeading } = useHeading();
    const { userLoginInfo } = useSelector(loginSelector);

    
    useEffect(() => {
        setHeading('Login');
        setSubHeading('');
        
        if (userLoginInfo) { // After login this state will be updated "userLoginInfo" and acoording to updated state it will redirect user to dashboard page
            return navigate(`/${(((userLoginInfo.userType).toLowerCase()))}/dashboard`);
        }

        return () => dispatch(resetLoginKey());
    }, [userLoginInfo])

    return (
        <div>
            <Header />
            <LoginForm />
        </div>
    )
}

export default Login