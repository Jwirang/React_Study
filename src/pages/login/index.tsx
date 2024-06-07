import { StyledContainer, StyledImage, Stylea, StyledForm } from "./style";
import fatbrain from '../../assets/fatbrain.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const Login = () => {
    if (username === '' || password === '') {
      alert('아이디와 비밀번호를 입력해 주세요');
    } else {
      alert('로그인 성공~');
    }
  }
  return (
    <StyledContainer>
    <StyledImage src={fatbrain} alt="Logo" />
    <StyledForm>
      <InputField width={300} type="text" placeholder="아이디" value={username} onChange={(event) => {
        setUsername(event.target.value);
      }}></InputField>
      <InputField width={300} type="password" placeholder="비밀번호" value={password} onChange={(event) => {
        setPassword(event.target.value);
      }}></InputField>
    </StyledForm>
    <Button width={300} onClick={Login}>로그인</Button>
    <Stylea href="/join">FatBrain이 처음이신가요?</Stylea>
    </StyledContainer>
  )
}

export default Login;