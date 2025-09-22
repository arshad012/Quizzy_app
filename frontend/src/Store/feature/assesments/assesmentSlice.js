import { createSlice } from "@reduxjs/toolkit";
import { assesmentInitailState } from "./initialState";

import * as Actions from './actions';

export * from './selectors';

const assesmentsSlice = createSlice({
    name: 'assesment-slice',
    initialState: assesmentInitailState,
    reducers: {
        setAssesmentKey: Actions.setAssesmentKeyAction,
        resetAssesmentState: Actions.resetAssesmentStateAction,
        setAssesment: Actions.setAssesmentAction,
        addAnswer: Actions.addAnswerAction
    }
})


export const { 
    setAssesmentKey,
    resetAssesmentState,
    setAssesment,
    addAnswer
    
} = assesmentsSlice.actions;

export default assesmentsSlice.reducer;
