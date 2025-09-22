import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Loader } from "lucide-react";

import { signupSelector } from '../../Store/feature/SignUp/selector'
import FormInputs from "./FormInputs";
import CustomButton from "../Common/CustomButton";

import { useSignupUserMutation } from "../../Store/feature/SignUp/api";
import { signupErrorsSelector } from "../../Store/feature/SignupErrors/selector";
import { updateErrorState } from "../../Store/feature/SignupErrors/signupErrorSlice";
import { findEmptyField } from "./utils/index";

function SignupForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupDetails = useSelector(signupSelector)
    const [triggerCreate, { isLoading }] = useSignupUserMutation();
    // const errors = useSelector(signupErrorsSelector);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let emptyField = findEmptyField(signupDetails);

        if (emptyField) {
            dispatch(
                updateErrorState({
                    key: emptyField,
                    value: true
                })
            )

            return;
        }

        try {
            await triggerCreate(signupDetails).unwrap();
            navigate("/login");
        }
        catch(error) {
            console.log('There was an error while creating your ID, please try again', error);
        }
    }

    return (
        <div className="border border-gray-300 rounded-lg w-110 mx-auto my-5 px-5 py-4 bg-white shadow-xl">

            <p className="text-center text-3xl font-bold">Quizzy</p>
            <p className="text-center">Enter your details to register</p>

            <form onSubmit={handleSubmit}>
                <FormInputs />

                <div className="mt-5 flex justify-center">
                    <CustomButton type='submit' className="justify-center gap-4 disabled:opacity-50 disabled:cursor-no-drop w-full" disabled={isLoading}>
                        {isLoading && <Loader size={20} className="animate-spin" />}
                        <p>Submit</p>
                    </CustomButton>
                </div>
            </form>
            <hr className="my-5 border-gray-400" />
            <p className="text-center mt-5">Already have an account ? <Link to={'/login'} className="underline text-blue-600">Sign in</Link> </p>
        </div>
    )
}

export default SignupForm