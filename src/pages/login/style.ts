import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const StyledImage = styled.img`
    width: 350px;
    height: auto;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0px 16px 0px;
`

const Stylea = styled.a `
    font-size: 12px;
    padding-top: 10px;
`

export {StyledContainer, StyledImage, StyledForm, Stylea}
