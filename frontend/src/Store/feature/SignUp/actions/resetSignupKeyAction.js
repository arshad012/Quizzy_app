import { signupInitailState } from "../initialState"

export const resetSignupKeyAction = (state) => {
    
    Object.assign(state, signupInitailState);
}