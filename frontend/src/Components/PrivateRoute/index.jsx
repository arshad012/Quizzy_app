import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSelector } from "../../Store/feature/Login/selector";

function PrivateRoute({ children, userType }) {
    const navigate = useNavigate();
    const { userLoginInfo, redirectTo } = useSelector(loginSelector);

    useEffect(() => {
        if (!userLoginInfo) {
            return navigate(`/${redirectTo}`);
        } else if(userType && userLoginInfo.userType !== userType) {
            return navigate(`/${((userLoginInfo.userType).toLowerCase())}/dashboard`);
        }
    }, [userLoginInfo]);

    return children;
}

export default PrivateRoute