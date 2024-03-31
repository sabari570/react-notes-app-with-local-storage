import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const StyledSearchNote = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(233, 233, 233);
  margin-bottom: 1.5rem;
  border-radius: 10px;
  padding: 5px;

  input{
    border: none;
    background-color: rgba(233, 233, 233);

    &:focus{
        outline: none;
    }
  }
`;

export const StyledSearchIcon = styled(MdSearch)`
  font-size: 1.3rem;
`;
