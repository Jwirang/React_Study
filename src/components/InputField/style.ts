import styled from "styled-components";

const StyledInputField = styled.input<{$width?:Number}>`
    ${props => props.$width && `width: ${props.$width}px;`}
    padding: 12px;
    //margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #5DADE2;
        outline: none;
    }
`

export { StyledInputField }