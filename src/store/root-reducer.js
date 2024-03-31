import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./note/note-reducer";
import { appThemeReducer } from "./app-theme/app-theme-reducer";

export const rootReducer = combineReducers({
    note: notesReducer,
    appTheme: appThemeReducer,
});