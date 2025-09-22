export const togggleSidebarAction = (state, {payload}) => {
    state.isSidebarOpen = payload ?? !state.isSidebarOpen;
}