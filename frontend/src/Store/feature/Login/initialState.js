
export const loginInitialState = {
    redirectTo: 'login',
    phone: '',
    password: '',
    userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")) : null
}