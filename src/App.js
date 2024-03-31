import React from "react";
import NotesList from "./components/noteslist/noteslist.component";
import { Container } from "./styled-components/container.styles";
import SearchNote from "./components/search-note/search-note.component";
import Header from "./components/header/header.component";
import { useSelector } from "react-redux";
import { selectAppTheme } from "./store/app-theme/app-theme-selector";
import "./index.css";

function App() {
  const isDarkMode = useSelector(selectAppTheme);

  return (
    <div className={`${isDarkMode && "dark-mode"}`}>
      <Container>
        <Header />
        <SearchNote />
        <NotesList />
      </Container>
    </div>
  );
}

export default App;
