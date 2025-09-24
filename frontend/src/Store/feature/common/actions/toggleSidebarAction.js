export const togggleSidebarAction = (state) => {
    const updatedState = !state.isSidebarOpen;
    state.isSidebarOpen = updatedState;
    localStorage.setItem('sidebar-state', JSON.stringify(updatedState));
}