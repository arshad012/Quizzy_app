import { createSlice } from "@reduxjs/toolkit";
import { templateInitailState } from "./initialState";

import * as Actions from './actions';

export * from './selectors';

const templateSlice = createSlice({
    name: 'template-slice',
    initialState: templateInitailState,
    reducers: {
        setTemplateKey: Actions.setTemplateKeyAction,
        addNewQuestionType: Actions.addNewQuestionTypeAction,
        removeQuestionType: Actions.removeQuestionTypeAction,
        updateQuestionTypeData: Actions.updateQuestionTypeDataAction,
        updateQuestionTypeOptions: Actions.updateQuestionTypeOptionsAction,
        resetTemplteState: Actions.resetTemplateStateAction,
        setTemplate: Actions.setTemplateAction
    }
})

export const {
    setTemplateKey,
    addNewQuestionType,
    removeQuestionType,
    updateQuestionTypeData,
    updateQuestionTypeOptions,
    resetTemplteState,
    setTemplate

} = templateSlice.actions;

export default templateSlice.reducer;
