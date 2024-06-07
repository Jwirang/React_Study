import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { Stylea, StyledForm } from "./style";

const LoginForm = () => {
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
        <StyledForm>
        <InputField width={300} type="text" placeholder="아이디" value={username} onChange={(event) => {
            setUsername(event.target.value);
        }}></InputField>
        <InputField width={300} type="password" placeholder="비밀번호" value={password} onChange={(event) => {
            setPassword(event.target.value);
        }}></InputField>
        <Button width={300} onClick={Login}>로그인</Button>
        <Stylea to="/join">FatBrain이 처음이신가요?</Stylea>
        </StyledForm>
    )
}

export default LoginForm