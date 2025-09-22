import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSelector } from "../../Store/feature/SignUp/selector";
import { setSignupKey } from "../../Store/feature/SignUp/signupSlice";

import CustomInputs from "../Common/inputs/CustomeInputs"
import { InputTypes } from "../Common/inputs/CustomeInputs/types"
import { userTypes } from "../Common/inputs/CustomeInputs/Utils";
import { radioInputs } from './utils/index';
import { signupErrorsSelector } from "../../Store/feature/SignupErrors/selector";
import { resetErrorState } from "../../Store/feature/SignupErrors/signupErrorSlice";

import { validateName, validatePhone, validatePassword } from "./utils/validation";

function FormInputs() {
    const dispatch = useDispatch();
    const { userType, name, phone, gender, password, confirmPassword } = useSelector(signupSelector)
    const [userGender, setUserGender] = useState(gender);
    const [user, setUser] = useState(userType);
    const errors = useSelector(signupErrorsSelector);
    const [showError, setShowError] = useState({...errors});
    
    useEffect(() => {
        setShowError({...errors});
    }, [errors])

    useEffect(() => {
        return () => {
            dispatch(resetErrorState());
        }
    }, [])
    
    const handleChange = (key, value, stateToUpdate) => {

        if (stateToUpdate) {
            if (stateToUpdate === 'user') setUser(value);
            else if (stateToUpdate === 'userGender') setUserGender(value);
        }

        dispatch(
            setSignupKey({ key, value })
        )
    }

    return (
        <div className="flex flex-col gap-3">
            <div>
                <CustomInputs
                    inputType={InputTypes.TEXT}
                    value={name}
                    onChange={(value) => handleChange('name', value)}
                    label='Name'
                    placeholder='Enter name'
                    id='userName'
                />
                <p className={`text-red-500 ${showError.name ? '' : 'hidden'}`}>{name.length == 0 ? 'Please enter your name' : name.length < 3 ? 'Name seems not correct, please enter correct name' : validateName(name) ? '' : 'Invalid name'}</p>
            </div>

            <div>
                <CustomInputs
                    inputType={InputTypes.NUMBER}
                    value={phone}
                    onChange={(value) => handleChange('phone', value)}
                    label='Phone number'
                    placeholder='Enter phone number'
                    id='userPhone'
                />
                <p className={`text-red-500 ${showError.phone ? '' : 'hidden'}`}>{phone.length == 0 ? 'Please enter your phone number' : phone.length < 10 ? 'Phone number must be 10 digits' : validatePhone(phone) ? '' : 'Digits can not more then 10'}</p></div>

            <div>
                <div className="flex gap-3 mt-2">
                    <label className="shrink-0">Gender : </label>
                    <div className="flex gap-3 overflow-x-auto">
                        {radioInputs.map((input, i) => (
                            <div key={i} className={`border px-2 rounded-sm transition ${userGender === input.label ? 'bg-blue-300' : ''}`}>
                                <CustomInputs
                                    inputType={InputTypes.RADIO}
                                    onChange={(value) => handleChange('gender', value, 'userGender')}
                                    value={input.value}
                                    label={input.label}
                                    name={input.name}
                                    id={input.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <p className={`text-red-500 ${showError.gender ? '' : 'hidden'}`}>{gender ? '' : 'Please select gender'}</p>
            </div>

            <div>
                <div className="flex gap-3 mt-2">
                    <label className="shrink-0">User type :</label>

                    <div className="flex gap-4 overflow-x-auto">
                        <div className={`border px-2 rounded-sm transition ${user === userTypes.TEACHER ? 'bg-blue-300' : ''}`}>
                            <CustomInputs
                                inputType={InputTypes.RADIO}
                                onChange={(value) => handleChange('userType', value, 'user')}
                                value={userTypes.TEACHER}
                                label='Teacher'
                                name="userType"
                                id="userType-teacher"
                            />
                        </div>

                        <div className={`border px-2 rounded-sm transition ${user === userTypes.STUDENT ? 'bg-blue-300' : ''}`}>
                            <CustomInputs
                                inputType={InputTypes.RADIO}
                                onChange={(value) => handleChange('userType', value, 'user')}
                                value={userTypes.STUDENT}
                                label='Student'
                                name="userType"
                                id="userType-student"
                            />
                        </div>
                    </div>
                </div>
                <p className={`text-red-500 ${showError.userType ? '' : 'hidden'}`}>{userType ? '' : 'Please select your user type'}</p>
            </div>

            <div>
                <CustomInputs
                    inputType={InputTypes.TEXT}
                    value={password}
                    onChange={(value) => handleChange('password', value)}
                    label='Create password'
                    placeholder='Password...'
                    id='userPassword'
                    maxLength='15'
                />
                <p className={`text-red-500 ${showError.password ? '' : 'hidden'}`}>{password.length == 0 ? 'Please create password' : password.length < 8 ? 'Password should be minumum 8 digits' : validatePassword(password) ? '' : 'Invalid password, Password must have one special character, one small and one capital letter'}</p>
            </div>

            <div>
                <CustomInputs
                    inputType={InputTypes.TEXT}
                    value={confirmPassword}
                    onChange={(value) => handleChange('confirmPassword', value)}
                    label='Confirm password'
                    placeholder='Confirm password...'
                    id='userConfirmPassword'
                />
                <p className={`text-red-500 ${showError.confirmPassword ? '' : 'hidden'}`}>{confirmPassword.length == 0 ? 'Please enter password again to confirm' : confirmPassword != password ? 'Password not matched, please enter same password' : ''}</p>
            </div>
        </div>
    )
}

export default FormInputs