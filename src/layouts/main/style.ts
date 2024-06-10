import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #2c3e50; /* 텍스트 색상 */
  font-family: 'Arial', sans-serif; /* 글꼴 스타일 */
  background: #ecf0f1; /* 배경색 추가 */
  padding: 10px 20px; /* 패딩 추가 */
  border-radius: 5px; /* 모서리 둥글게 */
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 기본 텍스트 색상 상속 */
  transition: color 0.3s ease, background-color 0.3s ease; /* 색상 및 배경색 애니메이션 */

  &:hover {
    color: #3498db; /* 호버 시 텍스트 색상 변경 */
  }
`;

const StyledHeaderContainer = styled.div`
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

const LogoContainer = styled.div`
  margin-right: 10px;
`;

const LogoImage = styled.img`
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const ButtonContainer = styled.div `
  position: fixed;
  right: 56px;
  bottom: 16px;
  width: 46px;
  height: 650px;
`

export { StyledH1, StyledLink, StyledHeaderContainer, LogoContainer, LogoImage, ButtonContainer };
