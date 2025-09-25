import { useNavigate, Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { useState } from "react";

import CustomButton from "../Common/CustomButton";
import { useSignupUserMutation } from "../../Store/feature/SignUp/api";
import CustomInputs from "../Common/inputs/CustomeInputs";
import { InputTypes } from "../Common/inputs/CustomeInputs/types";
import { userTypes } from "../Common/inputs/CustomeInputs/Utils";
import { validateName, validatePassword, validatePhone } from './utils/validation'

function SignupForm() {
    const navigate = useNavigate();
    const [triggerCreate, { isLoading }] = useSignupUserMutation();
    const [formData, setFormData] = useState({
        userType: "",
        name: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })
    const [showError, setShowError] = useState({
        userType: "",
        name: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [show, setShow] = useState({
        password: false,
        confirmPassword: false
    });
    const [signupSuccess, setSignupSuccess] = useState(false);

    const validateInputFieldOnChange = (name, value) => {
        let error = "";
        switch (name) {
            case "name":
                if (!validateName(value)) error = "Invalid name, name can not have such signs # % ^ * / \ : ; ` ? |";
                break;
            case "phone":
                if (!validatePhone(value)) error = "Invalid phone number";
                break;
            case "password":
                if (!validatePassword(value)) error = "Invalid password, password must have";
                break;
            default:
                null;
        }

        setShowError(prev => ({ ...prev, [name]: error }));
    }

    const validateInputFieldOnSubmit = () => {
        const tempErrors = {};

        if (!formData.name) tempErrors.name = "Name is required";
        else if (!validateName(formData.name)) tempErrors.name = "Invalid name, name can not have such signs # % ^ * / \ : ; ` ? |";

        if (!formData.phone) tempErrors.phone = "Phone number is required";
        else if (!validatePhone(formData.phone)) tempErrors.phone = "Invalid phone number";

        if (!formData.userType) tempErrors.userType = "Please select your role";

        if (!formData.password) tempErrors.password = "Please create your password, password must have";
        else if (!validatePassword(formData.password)) tempErrors.password = "Invalid password, password must have";

        if (!formData.confirmPassword) tempErrors.confirmPassword = "Please re-enter your password";
        else if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Password not matched";

        return tempErrors;
    }

    const handleChange = (key, value) => {
        validateInputFieldOnChange(key, value);
        setFormData(prev => ({ ...prev, [key]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tempErrors = validateInputFieldOnSubmit();
        setShowError(tempErrors);
        if (Object.keys(tempErrors).length !== 0) {
            return;
        }

        const submitData = { ...formData };
        delete submitData.confirmPassword;

        try {
            const data = await triggerCreate(submitData).unwrap();
            setSignupSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
        catch (error) {
            console.log('There was an error while signing up', error);
            if (error.data.message.includes("E11000")) {
                setShowError(prev => ({ ...prev, phone: 'We already have an ID registered with this number' }));
            }
        }
    }

    return (
        <div className={`border border-gray-300 rounded-lg w-110 mx-auto my-5 px-5 py-4 bg-white shadow-xl ${signupSuccess ? "border-green-500 border-4" : ""}`}>

            <p className="text-center text-3xl font-bold">Quizzy</p>
            <p className="text-center">Enter your details to register</p>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div>
                        <CustomInputs
                            inputType={InputTypes.TEXT}
                            value={formData.name}
                            onChange={(value) => handleChange('name', value)}
                            label='Name'
                            placeholder='Enter name'
                            id='userName'
                            className={`${showError.name ? "border-red-500 border-2" : ""}`}
                        />
                        <p className={`text-red-500 text-sm`}>{showError.name}</p>
                    </div>

                    <div>
                        <CustomInputs
                            inputType={InputTypes.NUMBER}
                            value={formData.phone}
                            onChange={(value) => handleChange('phone', value)}
                            label='Phone number'
                            placeholder='Enter phone number'
                            id='userPhone'
                            className={`${showError.phone ? "border-red-500 border-2" : ""}`}
                        />
                        <p className={`text-red-500 text-sm`}>{showError.phone}</p>
                    </div>

                    <div>
                        <div className="flex gap-3 mt-2">
                            <label className="shrink-0">You are signing up as:</label>

                            <div className="flex gap-4 overflow-x-auto">
                                <div className={`border px-3 py-1 rounded-md transition ${formData.userType === userTypes.TEACHER ? 'bg-blue-200 text-blue-800 border-blue-800' : ''}`}>
                                    <CustomInputs
                                        inputType={InputTypes.RADIO}
                                        onChange={(value) => handleChange('userType', value)}
                                        value={userTypes.TEACHER}
                                        label='Teacher'
                                        name="userType"
                                        id="userType-teacher"
                                    />
                                </div>

                                <div className={`border px-3 py-1 rounded-md transition ${formData.userType === userTypes.STUDENT ? 'bg-blue-200 text-blue-800 border-blue-800' : ''}`}>
                                    <CustomInputs
                                        inputType={InputTypes.RADIO}
                                        onChange={(value) => handleChange('userType', value)}
                                        value={userTypes.STUDENT}
                                        label='Student'
                                        name="userType"
                                        id="userType-student"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className={`text-red-500 text-sm`}>{showError.userType}</p>
                    </div>

                    <div>
                        <div className="flex items-end">
                            <div className="grow">
                                <CustomInputs
                                    inputType={show.password ? InputTypes.TEXT : InputTypes.PASSWORD}
                                    value={formData.password}
                                    onChange={(value) => handleChange('password', value)}
                                    label='Create password'
                                    placeholder='Password...'
                                    id='userPassword'
                                    maxLength='15'
                                    className={`rounded-r-none ${showError.password ? "border-red-500 border-2" : ""}`}
                                />
                            </div>
                            <CustomButton
                                className="rounded-l-none mb-1"
                                type='button'
                                onClick={() => setShow(prev => ({...prev, password: !show.password}))}
                            >{show.password ? "Hide" : "Show"}
                            </CustomButton>
                        </div>

                        <p className={`text-red-500 text-sm`}>{showError.password}</p>
                        {showError.password &&
                            <ul className="text-red-500 text-sm list-disc ml-5 mt-1">
                                <li>Atleast one capital and one small letter</li>
                                <li>Atleast one digit</li>
                                <li>Atleast one special character @ # $ % & *</li>
                            </ul>
                        }
                    </div>

                    <div>
                        <div className="flex items-end">
                            <div className="grow">
                                <CustomInputs
                                    inputType={show.confirmPassword ? InputTypes.TEXT : InputTypes.PASSWORD}
                                    value={formData.confirmPassword}
                                    onChange={(value) => handleChange('confirmPassword', value)}
                                    label='Confirm password'
                                    placeholder='Confirm password...'
                                    id='userConfirmPassword'
                                    className={`rounded-r-none ${showError.confirmPassword ? "border-red-500 border-2" : ""}`}
                                />
                            </div>
                            <CustomButton
                                className="rounded-l-none mb-1"
                                type='button'
                                onClick={() => setShow(prev => ({...prev, confirmPassword: !show.confirmPassword}))}
                            >{show.confirmPassword ? "Hide" : "Show"}
                            </CustomButton>
                        </div>

                        <p className={`text-red-500 text-sm`}>{showError.confirmPassword}</p>
                    </div>
                </div>

                <div className="mt-5">
                    {signupSuccess &&
                        <p className="text-center text-green-600 mb-5">Signup successfull, please wait...</p>
                    }
                    <CustomButton type='submit' className="justify-center gap-4 disabled:opacity-50 disabled:cursor-no-drop w-full" disabled={isLoading}>
                        {isLoading && <Loader size={20} className="animate-spin" />}
                        <p>Submit</p>
                    </CustomButton>
                </div>
            </form>
            <hr className="my-5 border-gray-400" />
            <p className="text-center mt-5">Already have an account ? <Link to={'/'} className="underline text-blue-600">Sign in</Link> </p>
        </div>
    )
}

export default SignupForm;