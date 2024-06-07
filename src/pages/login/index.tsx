import { Button, InputField, StyledContainer, StyledImage } from "./style";
import fatbrain from '../../assets/fatbrain.png';
import { useState } from "react";
import { log } from "console";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <InputField type="text" placeholder="아이디" value={username} onChange={(event) => {
      setUsername(event.target.value);
    }}></InputField>
    <InputField type="password" placeholder="비밀번호" value={password} onChange={(event) => {
      setPassword(event.target.value);
    }}></InputField>
    <Button onClick={Login}>로그인</Button>
    </StyledContainer>
  )
}

export default Login;