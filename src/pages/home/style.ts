import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 36px;
  background-color: #f0f0f0; /* 로그인 화면과 통일된 배경 색상 */
`;

const StyledPostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px 15px 0px;
`;

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
  transition: all 0.3s ease; /* 부드러운 애니메이션 추가 */
  &:hover {
    background-color: #3498DB;
    transform: scale(1.07);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  }
`;

const StyledPost = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px); /* 살짝 떠오르는 효과 추가 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 그림자 강도 증가 */
  }
`;

export { StyledContainer, StyledPostListContainer, StyledButton, StyledPost };
