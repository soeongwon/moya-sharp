import React, { useState } from "react";
import styled from "@emotion/styled";
import { loginReqType } from "../../redux/user/auth";

interface SigninProps {
  login: (reqData: loginReqType) => void;
}
export const Login: React.FC<SigninProps> = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function clickLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    login({ userId: email, password });
  }

  console.log(email, password);
  return (
    <LoginWrap>
      <LoginFormWrap>
        <FormInnerWrap>
          <h1>로그인</h1>
          <p>글로벌 경제 금융 정보검색 서비스 모야입니다.</p>
          <form>
            <Fieldset>로그인</Fieldset>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              name="password"
              placeholder="이메일을 입력하세요"
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={e => clickLogin(e)}>로그인</button>
          </form>
        </FormInnerWrap>
      </LoginFormWrap>
      <BackgroundImage />
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(
    253.41deg,
    rgba(255, 255, 255, 0.25) -1.86%,
    rgba(228, 249, 243, 0.25) 62.27%,
    rgba(248, 220, 210, 0.25) 97.33%
  );
`;

const BackgroundImage = styled.div`
  width: 50%;
  background-image: url("/images/loginBackground.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const LoginFormWrap = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  border-right: 1px solid gray;
`;

const FormInnerWrap = styled.div`
  position: absolute;
  width: 375px;
  height: 812px;
  left: 25%;
  top: 161px;
  padding: 0 28px;
  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 45px;
    color: #546e7a;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 45px;
    letter-spacing: -0.450202px;
    color: #90a4ae;
  }
  label {
    font-weight: 600;
    font-size: 12px;
    line-height: 45px;
    display: block;
    color: #546e7a;
  }
  input {
    width: 85%;
    height: 43px;
    border: 0.643145px solid rgba(95, 182, 173, 0.4);
    padding-left: 12px;
    outline: none;
  }
  button {
    width: 86.5%;
    height: 45px;
    background: #48c0b7;
    color: #fff;
    border: none;
    margin-top: 50px;
    cursor: pointer;
  }
`;

const Fieldset = styled.fieldset`
  font-size: 0;
`;
