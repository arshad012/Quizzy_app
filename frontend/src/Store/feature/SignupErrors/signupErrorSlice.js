import { createSlice } from "@reduxjs/toolkit";
import { signupErrorsInitialState } from "./initialState";
import * as Actions from './actions/index';

const signupErrorsSlice = createSlice({
    name: 'signup_errors',
    initialState: signupErrorsInitialState,
    reducers: {
        updateErrorState: Actions.updateErrorStateAction,
        resetErrorState: Actions.resetErrorStateAction,
    }
})

export const { updateErrorState, resetErrorState } = signupErrorsSlice.actions;
export default signupErrorsSlice.reducer;