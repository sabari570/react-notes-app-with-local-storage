import React from "react";
import { StyledDeleteIcon, StyledNote, StyledNoteFooter } from "./note.styles";
import { useDispatch } from "react-redux";
import { deleteNotes } from "../../store/note/note-reducer";

export default function Note({ note }) {
  const dispatch = useDispatch();

  const { id, title, date } = note;

  const deleteNoteHandler = () => {
    console.log("Delete this item: ", id);
    dispatch(deleteNotes(id));
  };

  return (
    <StyledNote>
      <span>{title}</span>
      <StyledNoteFooter>
        <small>{date}</small>
        <StyledDeleteIcon onClick={deleteNoteHandler} />
      </StyledNoteFooter>
    </StyledNote>
  );
}
