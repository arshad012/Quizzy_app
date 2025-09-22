import { createSlice } from '@reduxjs/toolkit'
import { loginInitialState } from './initialState'

import * as Actions from './actions'

export const loginSlice = createSlice({
    name: 'auth-slice',
    initialState: loginInitialState,
    reducers: {
        logoutUser: Actions.getUserLogoutAction,
        setLoginKey: Actions.setLoginKeyAction,
        resetLoginKey: Actions.resetLoginKeyAction
    }
})

export const { logoutUser, setLoginKey, resetLoginKey } = loginSlice.actions;
export default loginSlice.reducer;