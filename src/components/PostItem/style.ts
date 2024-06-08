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

export { StyledPostItem, StyledContainer}