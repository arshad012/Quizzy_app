import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader } from "lucide-react";

import Header from "../../Components/Teacher/Header"
import { useHeading } from "../../Hooks"
import { useGetUserInfoToLoginMutation } from "../../Store/feature/Login/api";
import CustomInputs from "../../Components/Common/inputs/CustomeInputs";
import CustomButton from "../../Components/Common/CustomButton";
import { InputTypes } from "../../Components/Common/inputs/CustomeInputs/types";
import { localStorageKey_token, localStorageKey_user } from "../../Utils";

function Login() {
    const navigate = useNavigate();
    const { setHeading } = useHeading();
    const [loginUser, { isLoading }] = useGetUserInfoToLoginMutation();
    const [formData, setFormData] = useState({
        phone: "",
        password: ""
    })
    const [showError, setShowError] = useState({
        phone: "",
        password: "",
    })
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setHeading('Login Form');

        const token = localStorage.getItem(localStorageKey_token);
        if(token) {
            const userInfo = JSON.parse(localStorage.getItem(localStorageKey_user));
            if(userInfo) {
                navigate(`/${(userInfo.userType).toLowerCase()}-home`);
            }
        }
    }, [])

    const validateInputFieldOnChange = (key, value) => {
        let error = "";
        switch (key) {
            case "phone": {
                if (value.length != 10) error = "Invalid phone number";
                break;
            }
            case "password": {
                if (!value) error = "Please enter your password";
                break;
            }
            default:
                null;
        }
        setShowError(prev => ({ ...prev, [key]: error }));
    }

    const validateInputFieldOnSubmit = () => {
        const tempError = {};

        if (!formData.phone) tempError.phone = "Phone number is required";
        else if (formData.phone.length != 10) tempError.phone = "Invalid phone number";

        if (!formData.password) tempError.password = "Please enter your password";

        return tempError;
    }

    const handleChange = (key, value) => {
        const submitClickedOnce = localStorage.getItem('submit-clicked-once');
        if(submitClickedOnce) {
            validateInputFieldOnChange(key, value);
        }
        setFormData(prev => ({ ...prev, [key]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('submit-clicked-once', true);

        const tempErrors = validateInputFieldOnSubmit();
        setShowError(tempErrors);
        if (Object.keys(tempErrors).length != 0) {
            return;
        }

        if (isLoading) return;
        try {
            const response = await loginUser(formData).unwrap();
            
            localStorage.setItem(localStorageKey_user, JSON.stringify(response.data.data));
            localStorage.setItem(localStorageKey_token, response.data.token);

            localStorage.removeItem('submit-clicked-once');

            navigate(`/${(((response.data.data.userType).toLowerCase()))}-home`);
            
        } catch (error) {
            console.error("❌ Login error:", error);
            if (error.data.message === "User not found") {
                setShowError(prev => ({ ...prev, phone: error.data.message }));
            }
            else if (error.data.message === "Wrong password") {
                setShowError(prev => ({ ...prev, password: error.data.message }));
            } else {
                setShowError(prev => ({ ...prev, phone: "Somthing went wrong" }));
            }
        }
    }

    return (
        <div>
            <Header />
            {/*  */}
            <div className="border border-gray-300 rounded-lg w-110 mx-auto my-5 px-5 py-4 bg-white shadow-xl">

                <p className="text-center text-3xl font-bold">Quizzy</p>
                <p className="text-center">Enter your login credentials</p>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 mt-5">
                        <div>
                            <CustomInputs
                                inputType={InputTypes.NUMBER}
                                value={formData.phone}
                                onChange={(value) => handleChange('phone', value)}
                                placeholder='Enter phone number'
                                id='phoneNumber'
                                className={`${showError.phone ? "border-red-500 border-2" : ""}`}
                            />
                            <p className={`text-red-400 text-sm`}>{showError.phone}</p>
                        </div>

                        <div>
                            <div className={`flex`}>
                                <div className='grow'>
                                    <CustomInputs
                                        inputType={show ? InputTypes.TEXT : InputTypes.PASSWORD}
                                        value={formData.password}
                                        onChange={(value) => handleChange('password', value)}
                                        placeholder='Enter Password'
                                        id='password'
                                        className={`rounded-r-none ${showError.password ? "border-red-500 border-2" : ""}`}
                                    />
                                </div>
                                <CustomButton 
                                    className="rounded-l-none"
                                    type='button'
                                    onClick={() => setShow(prev => !prev)}
                                >{show ? "Hide" : "Show"}
                                </CustomButton>
                            </div>
                            <p className={`text-red-400 text-sm`}>{showError.password}</p>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <CustomButton type='submit' className="justify-center gap-4 disabled:opacity-50 disabled:cursor-no-drop w-full">
                            {isLoading && <Loader size={20} className="animate-spin" />}
                            <p>Login</p>
                        </CustomButton>
                    </div>
                </form>

                <hr className="my-5 border-gray-400" />

                <p className="text-center mt-5">Don't have an account ? <Link to={'/signup'} className="underline text-blue-600">Register now</Link> </p>
            </div>
        </div>
    )
}

export default Login;