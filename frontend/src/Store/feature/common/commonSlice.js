import {createSlice} from '@reduxjs/toolkit'
import * as Actions from './actions'
import { commonInitialState } from './initialState'
export * from './selectors'

const commonSlice = createSlice({
    name: 'teacher-common',
    initialState: commonInitialState,
    reducers: {
        toggleSidebar: Actions.togggleSidebarAction,
        setCommonKey: Actions.setCommonKeyAction
    }
})

export const {toggleSidebar, setCommonKey} = commonSlice.actions;

export default commonSlice.reducer;