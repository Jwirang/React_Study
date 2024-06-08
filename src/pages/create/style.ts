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

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
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
    border-color: #5DADE2;
    outline: none;
  }
`;

const FormTitle = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

const PlaceholderImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover; /* 이미지의 비율을 유지하며 크기에 맞게 조절 */
`;

const Instructions = styled.p`
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

export { StyledContainer, FormContainer, StyledTextArea, FormTitle, PlaceholderImage, Instructions };
