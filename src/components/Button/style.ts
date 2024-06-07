import styled from "styled-components";

const StyledButton = styled.button<{$width?: Number}>`
    ${props => props.$width && `width: ${props.$width}px;`}
    padding: 12px;
    //margin: 20px 0;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
}
`

export { StyledButton }