import React from 'react'
import { StyledHeader, StyledToggleButton } from './header.styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectAppTheme } from '../../store/app-theme/app-theme-selector';
import { setDarkMode } from '../../store/app-theme/app-theme-reducer';

export default function Header() {
    const dispatch = useDispatch();

    const isDarkMode = useSelector(selectAppTheme);

    const onToggleModeHandler = () => {
        dispatch(setDarkMode(!isDarkMode));
    };

  return (
    <StyledHeader>
        <h2>React Notes</h2>
        <StyledToggleButton onClick={onToggleModeHandler} >Toggle Mode</StyledToggleButton>
    </StyledHeader>
  )
}
