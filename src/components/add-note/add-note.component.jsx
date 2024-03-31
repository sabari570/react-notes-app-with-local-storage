import React from "react";
import { StyledAddNote, StyledSaveButton } from "./add-note.styles";
import { StyledNoteFooter } from "../note/note.styles";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setNotes } from "../../store/note/note-reducer";

export default function AddNote() {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const addNoteChangeHandler = (event) => {
    if( characterLimit - event.target.value.length >= 0){
        setNoteText(event.target.value);
    }
  };

  const addNoteHandler = () => {
    // This condition is written to not save empty notes
    if (noteText.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        title: noteText,
        date: date.toLocaleDateString(),
      };
      dispatch(setNotes(newNote));
    }
    setNoteText("");
  };

  return (
    <StyledAddNote>
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={addNoteChangeHandler}
        placeholder="Type to add a note..."
      ></textarea>
      <StyledNoteFooter>
        <small>{characterLimit - noteText.length} Remaining</small>
        <StyledSaveButton onClick={addNoteHandler}>Save</StyledSaveButton>
      </StyledNoteFooter>
    </StyledAddNote>
  );
}
