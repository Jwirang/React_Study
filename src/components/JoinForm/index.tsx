import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { StyledForm } from "./style";
import { fetchCreateUser } from "../../api/fatBrainApi";
import Alert from "../Alert";

const JoinForm = () => {
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

  const Join = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (
      joinFrom.username === "" ||
      joinFrom.password === "" ||
      joinFrom.confirmPassword === "" ||
      joinFrom.nickname === ""
    ) {
      setShowAlert(true);
    } else {
      const { username, password, nickname } = joinFrom;
      const respons = await fetchCreateUser({ username, password, nickname });
    }
  };

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
      <Button width={300} onClick={Join}>
        회원가입
      </Button>
      {showAlert && (
        <Alert
                  message="모든 항목을 입력해 주세요."
                  onClose={() => setShowAlert(false)} title={""}        />
      )}
    </StyledForm>
  );
};

export default JoinForm;
