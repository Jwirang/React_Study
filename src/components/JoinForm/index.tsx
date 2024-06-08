import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { StyledForm } from "./style";
import { createUser } from "../../api/fatBrainApi";

const JoinForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confiompassword, setConfiompassword] = useState('');
    const [nickname, serNickname] = useState('');

    const Join = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     event.preventDefault();
     if (username === '' || password === '' || confiompassword === '' || nickname === '') {
        alert('모든 항목을 입력해 주세요');
      } else {
        const respons = await createUser({username, password, nickname})
        alert(respons);
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
        <InputField width={300} type="password" placeholder="비밀번호확인" value={confiompassword} onChange={(event) => {
            setConfiompassword(event.target.value);
        }}></InputField>
        <InputField width={300} type="nickname" placeholder="닉네임" value={nickname} onChange={(event) => {
            serNickname(event.target.value);
        }}></InputField>
        <Button width={300} onClick={Join}>회원가입</Button>
        </StyledForm>
    )
}

export default JoinForm