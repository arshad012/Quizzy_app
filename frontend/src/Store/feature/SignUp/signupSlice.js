import { createSlice } from "@reduxjs/toolkit";
import { signupInitailState } from "./initialState";
import * as Actions from './actions/index'

const signupSlice = createSlice({
    name: 'signup',
    initialState: signupInitailState,
    reducers: {
        setSignupKey: Actions.setSignupKeyAction,
        resetSignupKey: Actions.resetSignupKeyAction
    }
})

export const { setSignupKey, resetSignupKey } = signupSlice.actions;
export default signupSlice.reducer;