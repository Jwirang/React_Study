import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 36px;
`
const StyledTextArea = styled.textarea`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 16px;
  height: 200px;
  resize: none;
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`
export { StyledContainer, StyledTextArea }