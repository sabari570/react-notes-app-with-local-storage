import React from 'react'
import { StyledSearchIcon, StyledSearchNote } from './search-note.styles'
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../store/note/note-reducer';

export default function SearchNote() {
    const dispatch = useDispatch();

    const onSearchNoteHandler = (event) => {
        dispatch(setSearchText(event.target.value));
    };

  return (
    <StyledSearchNote>
        <StyledSearchIcon />
        <input type='text' onChange={onSearchNoteHandler} placeholder='Type to search...'/>
    </StyledSearchNote>
  )
}
