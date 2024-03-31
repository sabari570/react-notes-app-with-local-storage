import styled from "styled-components";

export const StyledAddNote = styled.div`
    background-color: #67d7cc;
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* This is how you style a tag that is inside the styled component without creating a seperate styled component for it */
    textarea{
        border: none;
        resize: none;
        background-color: #67d7cc;

        &:focus{
            outline: none;
        }
    }
`;

export const StyledSaveButton = styled.button`
    background-color: #e1e1e1;
    border: none;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;  //top right bottom left

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        background-color: #ededed;
    }
`;
