import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0px 16px 0px;
    align-items: center;
    justify-content: center;
`

const Stylea = styled(Link) `
    font-size: 12px;
`

export { StyledForm, Stylea}
