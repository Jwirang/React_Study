import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledPostItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 90%;
  &:hover {
    // background-color: #e0e0e0;
    // transform: scale(1.05);
    transform: translateY(-5px); /* 살짝 떠오르는 효과 추가 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 그림자 강도 증가 */
  }
`
const StyledTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
`

const StyleP = styled.p`
  text-align: right;
  font-size: 0.875rem;
  color: #666;
  margin: 5px 0 0 0;
`

export { StyledPostItem, StyledContainer, StyleP, StyledTitle}