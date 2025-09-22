import { useSelector, useDispatch } from "react-redux"
import CustomInputs from "../Common/inputs/CustomeInputs"
import { InputTypes } from "../Common/inputs/CustomeInputs/types/index"
import { loginSelector } from "../../Store/feature/Login/selector"
import { setLoginKey } from "../../Store/feature/Login/loginSlice"
import { useState } from "react"

function FormInputs() {
    const dispatch = useDispatch();
    const { phone, password } = useSelector(loginSelector);
    const [showError, setShowError] = useState({
        phone: false,
        password: false
    })

    const handleChange = (key, value) => {
        dispatch(
            setLoginKey({ key, value })
        )
    }

    return (
        <div className="flex flex-col gap-3 mt-5">
            <div>
                <CustomInputs
                    inputType={InputTypes.NUMBER}
                    value={phone}
                    onChange={(value) => handleChange('phone', value)}
                    placeholder='Enter phone number'
                    id='phoneNumber'
                />
                <p className={`text-red-500 ${showError.phone ? '' : 'hidden'}`}>{phone.length == 0 ? 'Please enter your phone number' : phone.length < 10 ? 'Phone number must be 10 digits' : ''}</p>
            </div>

            <div>
                <CustomInputs
                    inputType={InputTypes.TEXT}
                    value={password}
                    onChange={(value) => handleChange('password', value)}
                    placeholder='Enter Password'
                    id='password'
                />
                <p className={`text-red-500 ${showError.password ? '' : 'hidden'}`}>{password.length == 0 ? 'Please create password' : password.length < 8 ? 'Password should be minumum 8 digits' : ''}</p>
            </div>
        </div>
    )
}

export default FormInputs