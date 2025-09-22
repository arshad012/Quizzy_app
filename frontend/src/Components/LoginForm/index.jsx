import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

import CustomButton from "../Common/CustomButton";
import FormInputs from "./FormInputs";
import { useGetUserInfoToLoginMutation } from "../../Store/feature/Login/api";
import { loginSelector } from "../../Store/feature/Login/selector";
import { useEffect } from "react";

function LoginForm() {
    const { userLoginInfo, phone, password } = useSelector(loginSelector);
    console.log('userLoginInfo:', userLoginInfo);
    const [loginUser, { isLoading }] = useGetUserInfoToLoginMutation();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        try {
            const unused = await loginUser({ phone, password }).unwrap();
        } catch (error) {
            console.error("❌ Login error:", error);
        }
    }

    return (
        <div className="border border-gray-300 rounded-lg w-110 mx-auto my-5 px-5 py-4 bg-white shadow-xl">

            <p className="text-center text-3xl font-bold">Quizzy</p>
            <p className="text-center">Enter your login credentials</p>

            <form onSubmit={handleSubmit}>
                <FormInputs />

                <div className="mt-5 flex justify-center">
                    <CustomButton type='submit' className="justify-center gap-4 disabled:opacity-50 disabled:cursor-no-drop w-full" disabled={phone.length < 10 || password.length < 8 || isLoading}>
                        {isLoading && <Loader size={20} className="animate-spin" />}
                        <p>Login</p>
                    </CustomButton>
                </div>
            </form>

            <hr className="my-5 border-gray-400" />

            <p className="text-center mt-5">Don't have an account ? <Link to={'/signup'} className="underline text-blue-600">Register now</Link> </p>
        </div>
    )
}

export default LoginForm