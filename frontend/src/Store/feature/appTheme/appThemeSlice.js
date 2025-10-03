import { createSlice } from '@reduxjs/toolkit';

const appThemeSlice = createSlice({
    name: "appThemeSlice",
    initialState: {
        quizzyAppColorMode: localStorage.getItem("quizzy-app-color-mode") ?? "light"
    },
    reducers: {
        toggleQuizzyAppThemeColorMode: (state) => {
            const updatedTheme = state.quizzyAppColorMode === "light" ? "dark" : "light";
            localStorage.setItem("quizzy-app-color-mode", updatedTheme);
            state.quizzyAppColorMode = updatedTheme;
        }
    }
});

export const { toggleQuizzyAppThemeColorMode } = appThemeSlice.actions;
export default appThemeSlice.reducer;