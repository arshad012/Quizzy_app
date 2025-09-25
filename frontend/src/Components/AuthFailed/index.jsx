import { Link } from "react-router-dom";
import CustomButton from "../Common/CustomButton";
import { localStorageKey_token, localStorageKey_user } from "../../Utils";

function AuthFailed() {
    localStorage.removeItem(localStorageKey_user);
    localStorage.removeItem(localStorageKey_token);
    
    return (
        <div className="flex flex-col items-center">
            <p className="text-red-500 text-center mt-10 text-3xl">Login expired</p>
            <p className="text-red-500 text-center mt-5 text-xl">Please login again</p>
            <Link to="/">
                <CustomButton className="mt-2">Login</CustomButton>
            </Link>
        </div>
    )
}

export default AuthFailed;