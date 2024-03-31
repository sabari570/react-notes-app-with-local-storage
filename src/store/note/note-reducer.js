import { createSlice } from "@reduxjs/toolkit";

const NOTE_INITIAL_STATE = {
    notes: [],
    searchedText: ''
};

const addNewNoteToList = (notesList, newNote) => {
    return [...notesList, newNote];
};

const deleteNoteFromNotesList = (notesList, noteIdToBeDeleted) => {
    return notesList.filter((note) => note.id !== noteIdToBeDeleted);
};

const notesSlice = createSlice({
    name: 'note',
    initialState: NOTE_INITIAL_STATE,
    reducers: {
        setNotes: (state, action) => {
            state.notes = addNewNoteToList(state.notes, action.payload);
        },
        deleteNotes: (state, action) => {
            state.notes = deleteNoteFromNotesList(state.notes, action.payload);
        },
        setSearchText: (state, action) => {
            state.searchedText = action.payload
        },
    }
});

export const { setNotes, deleteNotes, setSearchText } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;