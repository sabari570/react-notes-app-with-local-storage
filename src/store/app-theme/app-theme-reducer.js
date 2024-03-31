import { createSlice } from "@reduxjs/toolkit";

const THEME_INITIAL_STATE = {
    isDarkMode: false,
};

const appThemeSlice = createSlice({
    name: 'appTheme',
    initialState: THEME_INITIAL_STATE,
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const { setDarkMode } = appThemeSlice.actions;

export const appThemeReducer = appThemeSlice.reducer;