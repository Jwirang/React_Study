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

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  margin: 10px 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

const PostCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
  width: 100%;
`;

const PostBody = styled.div`
  color: #666;
  line-height: 1.6;
  text-align: left;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  border-left: 4px solid #5DADE2;
  background-color: #fafafa;
  margin-top: 20px;
  white-space: pre-wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

export { StyledContainer, StyledButton, PostCard, PostTitle, PostBody, ButtonGroup };
