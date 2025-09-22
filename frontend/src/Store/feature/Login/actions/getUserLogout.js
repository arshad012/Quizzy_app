
export const getUserLogoutAction = (state) => {

    state['userLoginInfo'] = null;

    localStorage.removeItem("userLoginInfo");
}