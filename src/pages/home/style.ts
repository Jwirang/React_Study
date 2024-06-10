import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 36px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f0f0f0 0%, #d0e1f9 100%);
`;

const StyledPostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px;
  width: 100%;
  max-width: 800px;
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
  transition: all 0.3s ease;
  &:hover {
    background-color: #3498DB;
    transform: scale(1.07);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledPost = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  &:hover .hover-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    display: block;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const HoverImage = styled.img`
  width: 70px;
  height: 70px;
`;

const HoverText = styled.div`
  font-size: 18px;
  color: #666;
  margin-top: 40px;
`;

const StyleP = styled.p`
  text-align: center;
`

const BrainText = styled.p`
  margin-top: -50px;
  text-align: center;
  margin-left: -150px;
`;

export { BrainText, StyledContainer, StyledPostListContainer, StyledButton, StyledPost, Card, CardTitle, CardBody, HoverImage, HoverText, StyleP };
