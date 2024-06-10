import styled from "styled-components";

const StyledButton = styled.button<{$width?: Number, $padding?: Number, $font?: Number}>`
    ${props => props.$width && `width: ${props.$width}px;`}
    ${props => props.$padding ? `padding: ${props.$padding}px;` : 'padding: 12px;'}
    background-color: #5DADE2;
    color: white;
    border: none;
    border-radius: 6px;
    ${props => props.$font ? `font-size: ${props.$font}px;` : 'font-size: 16px;'}
    cursor: pointer;
    transition: background-color 0.3s;
    float: right;

    &:hover {
        background-color: #3498DB;
}
`

export { StyledButton }