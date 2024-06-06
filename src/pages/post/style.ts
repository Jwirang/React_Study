import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 36px;
`
const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  margin: 10px 5px;
  &:hover {
    background-color: #45a049;
  }
`

export {StyledContainer, StyledButton}