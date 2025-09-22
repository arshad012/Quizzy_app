import { loginInitialState } from "../initialState";

export const resetLoginKeyAction = (state) => {

    Object.assign(state, loginInitialState);
    state.userLoginInfo = localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")) : null
}