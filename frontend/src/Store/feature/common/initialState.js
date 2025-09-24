
export const commonInitialState = {
    isSidebarOpen: JSON.parse(localStorage.getItem('sidebar-state')) ?? true,
    heading: "",
    subHeading: ""
}