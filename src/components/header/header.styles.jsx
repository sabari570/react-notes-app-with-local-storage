import styled from "styled-components";
import { StyledSaveButton } from "../add-note/add-note.styles";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledToggleButton = styled(StyledSaveButton)`
    padding: 10px 15px;
`;