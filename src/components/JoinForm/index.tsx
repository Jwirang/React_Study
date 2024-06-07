import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { StyledForm } from "./style";

const JoinForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const [nickname, serNickname] = useState('');
    const Join = () => {
      if (username === '' || password === '' || conpassword === '' || nickname === '') {
        alert('모든 항목을 입력해 주세요');
      } else {
        alert('회원가입 성공~');
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
        <InputField width={300} type="confiompassword" placeholder="비밀번호확인" value={conpassword} onChange={(event) => {
            setConpassword(event.target.value);
        }}></InputField>
        <InputField width={300} type="nickname" placeholder="닉네임" value={nickname} onChange={(event) => {
            serNickname(event.target.value);
        }}></InputField>
        <Button width={300} onClick={Join}>회원가입</Button>
        </StyledForm>
    )
}

export default JoinForm