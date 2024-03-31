import React from "react";
import { StyledNotesList } from "./noteslist.styles";
import Note from "../note/note.component";
import { useSelector } from "react-redux";
import {
  selectNotesList,
  selectSearchedText,
} from "../../store/note/note-selector";
import AddNote from "../add-note/add-note.component";

export default function NotesList() {
  const notesList = useSelector(selectNotesList);

  const searchedText = useSelector(selectSearchedText);

  const filteredNotesList = notesList.filter((note) =>
    note.title.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <StyledNotesList>
      {filteredNotesList.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
      <AddNote />
    </StyledNotesList>
  );
}
