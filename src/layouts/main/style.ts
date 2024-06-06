import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 24px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`

const StyledHeaderContainer = styled.div`
  padding: 0px 16px 0px 16px;
`

export { StyledH1, StyledLink, StyledHeaderContainer }