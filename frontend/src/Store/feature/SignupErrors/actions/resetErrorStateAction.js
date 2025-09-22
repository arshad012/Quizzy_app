import { signupErrorsInitialState } from "../initialState"

export const resetErrorStateAction = (state) => {
    
    Object.assign(state, signupErrorsInitialState);
}