import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 36px;
`

const StyledPostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px 15px 0px;
`

const StyledButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50px;
  background-color: #5DADE2;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  font-size: 30px;
  &:hover {
    background-color: #3498DB;
    transform: scale(1.07);
  }
`

export { StyledContainer, StyledPostListContainer, StyledButton}