import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchIssueToken } from "../../api/fatBrainApi";
import fatBrainClient from "../../api/fatBrainApi/client";
import Alert from "../Alert";
import Button from "../Button";
import InputField from "../InputField";
import { Stylea, StyledForm } from "./style";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessgae, setErrorMessage] = useState('');
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const eventHandeler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginMutation = useMutation(
    async ({ username, password }: { username: string; password: string }) => {
      return fetchIssueToken({
        grantType: "password",
        username,
        password,
      });
    },
    {
      onSuccess: ({ tokenType, accessToken, refreshToken, refreshExpiresIn }) => {
        Cookies.set("tid", refreshToken, {
          path: "",
          expires: refreshExpiresIn,
        });
        fatBrainClient.defaults.headers["Authorization"] = `${tokenType} ${accessToken}`;
        navigate("/");
      },
      onError: (error: any) => {
        if ((error as AxiosError)?.response) {
            setErrorMessage(error.response.data.message);
        }
      },
    }
  );

  const login = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (loginForm.username === "" || loginForm.password === "") {
        setShowAlert(true);
      return;
    }
    loginMutation.mutate(loginForm);
  };

  return (
    <StyledForm>
      <InputField
        width={300}
        type="text"
        name="username"
        placeholder="아이디"
        value={loginForm.username}
        onChange={eventHandeler}
      />
      <InputField
        width={300}
        type="password"
        name="password"
        placeholder="비밀번호"
        value={loginForm.password}
        onChange={eventHandeler}
        message={errorMessgae}
      />
      <Button width={300} onClick={login}>
        로그인
      </Button>
      <Stylea to="/join">FatBrain이 처음이신가요?</Stylea>
      {showAlert && (
        <Alert
        message="모든 항목을 입력해 주세요."
        onClose={() => setShowAlert(false)} title={""}/>
      )}
    </StyledForm>
  );
};

export default LoginForm;
