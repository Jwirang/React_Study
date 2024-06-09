import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchCreateUser } from "../../api/fatBrainApi";
import Alert from "../Alert";
import Button from "../Button";
import InputField from "../InputField";
import { StyleText, StyledForm } from "./style";

const JoinForm = () => {
  const navigate = useNavigate();
  const [errorMessgae, setErrorMessage] = useState('');
  const [joinFrom, setJoinFrom] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setJoinFrom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { username, password, nickname } = joinFrom;
  
  const mutation = useMutation(fetchCreateUser, {
    onSuccess: () => {
        // 회원가입 성공 모달창
        navigate('/login')
    },
    onError: (error: any) => {
        if ((error as AxiosError)?.response) {
            setErrorMessage(error.response.data.message);
        }
    },
})

const handleSubmit = (event: { preventDefault: () => void; }) => {
    event?.preventDefault()
    if (username === "" || password === "" || joinFrom.confirmPassword === "" || nickname === "") {
        setShowAlert(true);
        return;
    }
    mutation.mutate({username, password, nickname});
}
  
  return (
    <StyledForm>
      <InputField
        width={300}
        type="text"
        name="username"
        placeholder="아이디"
        value={joinFrom.username}
        onChange={handleChange}
      ></InputField>
      <InputField
        width={300}
        type="password"
        name="password"
        placeholder="비밀번호"
        value={joinFrom.password}
        onChange={handleChange}
      ></InputField>
      <InputField
        width={300}
        type="password"
        name="confirmPassword"
        placeholder="비밀번호확인"
        value={joinFrom.confirmPassword}
        onChange={handleChange}
      ></InputField>
      <InputField
        width={300}
        type="nickname"
        name="nickname"
        placeholder="닉네임"
        value={joinFrom.nickname}
        onChange={handleChange}
      ></InputField>
      <StyleText>{errorMessgae}</StyleText>
      <Button width={300} onClick={handleSubmit}>
        회원가입
      </Button>
      {showAlert && (
        <Alert
        message="모든 항목을 입력해 주세요."
        onClose={() => setShowAlert(false)} title={""}/>
      )}
    </StyledForm>
  );
};

export default JoinForm;
