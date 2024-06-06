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
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
    outline: none;
  }
`

const StyledTextField = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 16px;

  &:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
    outline: none;
  }
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
  &:hover {
    background-color: #45a049;
  }
`

export {StyledContainer, StyledTextArea, StyledTextField, StyledButton}