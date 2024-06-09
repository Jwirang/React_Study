import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0px 16px 0px;
    align-items: center;
    justify-content: center;
`

const Stylea = styled.a `
    font-size: 12px;
`
const StyleError = styled.p`
    font-size: 10px;
    color: red;
    align-self: start;
`
const ExtendedStyledForm = styled(StyledForm)`
    /* 추가적인 스타일을 여기에 작성하세요 */
    background-color: lightblue;
    border: 2px solid blue;
    border-radius: 8px;
`;
export { StyledForm, Stylea, StyleError}
