import styled from "styled-components";

const StyledCard = styled.div`
position: relative;
background-color: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 400px;  /* 고정 너비 설정 */
height: 120px;  /* 고정 높이 설정 */
overflow: hidden;
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

&:hover .hover-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  display: flex; /* 호버 시 플렉스 박스로 변경하여 중앙 정렬 */
}
`;


export { StyledCard }