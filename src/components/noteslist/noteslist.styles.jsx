import styled from "styled-components";

export const StyledNotesList = styled.div`
    display: grid;
    grid-gap: 1rem;
    /* This code is written for responsiveness here auto-fit is used to automatically adjust the grids accroding to browser width */
    /* Also the minmax takes min size of the div and also the max size of the div */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;