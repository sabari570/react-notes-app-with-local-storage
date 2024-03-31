import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";

export const StyledNote = styled.div`
  background-color: #fef68a;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* this is done to keep the spacing for the note which a user has put */
  white-space: pre-wrap;
`;

export const StyledNoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDeleteIcon = styled(MdDeleteForever)`
  font-size: 1.3em;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
