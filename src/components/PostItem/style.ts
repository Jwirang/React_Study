import styled from "styled-components";

const StyledPostItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
`

export { StyledPostItem }