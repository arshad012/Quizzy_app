import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageKey_token, localStorageKey_user } from '../../Utils';

function PrivateRoute({ children, userType }) {
    const navigate = useNavigate();
    const token = localStorage.getItem(localStorageKey_token);
    const userLoginInfo = JSON.parse(localStorage.getItem(localStorageKey_user));

    useEffect(() => {
        if (!token) {
            return navigate(`/`);
        } else if (token && userLoginInfo.userType !== userType) {
            return navigate(`/${((userLoginInfo.userType).toLowerCase())}/dashboard`);
        }
    }, []);

    return children;
}

export default PrivateRoute;