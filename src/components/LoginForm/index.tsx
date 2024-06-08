import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { Stylea, StyledForm } from "./style";
import { fatchIssueToken, fatchMe } from "../../api/fatBrainApi";
import fatBrainClient from "../../api/fatBrainApi/client";
import { useRecoilState } from "recoil";
import { meState } from "../../stores";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [me, setMe] = useRecoilState(meState)
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const eventHandeler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const login = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      if (loginForm.username === '' || loginForm.password === '') {
        alert('아이디와 비밀번호를 입력해 주세요');
      } else {
        const { username, password } = loginForm
        const response = await fatchIssueToken({
            grantTyp: 'password',
            username,
            password
        })
        fatBrainClient.defaults.headers['Authorization'] = `${response.tokenType} ${response.accessToken}`

        const myInfo = await fatchMe()
        setMe(myInfo)
        navigate('/')
      }
    }
    return (
        <StyledForm>
        <InputField width={300} type="text" name="username" placeholder="아이디" value={loginForm.username} onChange={eventHandeler}></InputField>
        <InputField width={300} type="password" name="password" placeholder="비밀번호" value={loginForm.password} onChange={eventHandeler}></InputField>
        <Button width={300} onClick={login}>로그인</Button>
        <Stylea to="/join">FatBrain이 처음이신가요?</Stylea>
        </StyledForm>
    )
}

export default LoginForm