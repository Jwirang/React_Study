import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchCreateUser } from "../../api/fatBrainApi";
import Alert from "../Alert";
import Button from "../Button";
import InputField from "../InputField";
import { StyledForm } from "./style";

const JoinForm = () => {
  const navigate = useNavigate();
  const [userErrorMessage, setUserErrorMessage] = useState("")
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
  const [confirmpasswordErrorMessage, setConfirmpasswordErrorMessage] = useState("")
  const [nicknameError, setNicknameError] = useState('');
  const [joinFrom, setJoinFrom] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertmessage] = useState('');

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
        setAlertmessage('회원가입 성공!')
        setShowAlert(true);
    },
    onError: (error: any) => {
        if (error.response.data.username) {
            setUserErrorMessage(error.response.data.username);
        }
        else if (error.response.data.password) {
            setPasswordErrorMessage(error.response.data.password);
        }
    },
})

const handleSubmit = (event: { preventDefault: () => void; }) => {
    event?.preventDefault()
    setConfirmpasswordErrorMessage("");
    setUserErrorMessage("");
    setPasswordErrorMessage("");
    setNicknameError("");

    if (username === "" || password === "" || joinFrom.confirmPassword === "" || nickname === "") {
        setAlertmessage('모든 항목을 입력해주세요.')
        setShowAlert(true);
        return;
    } 
    if (password !== joinFrom.confirmPassword) {
        setConfirmpasswordErrorMessage("입력하신 비밀번호와 다릅니다.")
        return;
    } else {
        setConfirmpasswordErrorMessage("");
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
        value={username}
        onChange={handleChange}
        message={userErrorMessage}
      ></InputField>
      <InputField
        width={300}
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={handleChange}
        message={passwordErrorMessage}
      ></InputField>
      <InputField
        width={300}
        type="password"
        name="confirmPassword"
        placeholder="비밀번호확인"
        value={joinFrom.confirmPassword}
        onChange={handleChange}
        message={confirmpasswordErrorMessage}
      ></InputField>
      <InputField
        width={300}
        type="nickname"
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={handleChange}
        message={nicknameError}
      ></InputField>
      <Button width={300} onClick={handleSubmit}>
        회원가입
      </Button>
      {showAlert && (
        <Alert
        message={alertMessage}
        onClose={() => {
          if (alertMessage === '회원가입 성공!') {
            navigate('/login')
          }
          setShowAlert(false)
        }} title={""}/>
      )}
    </StyledForm>
  );
};

export default JoinForm;
