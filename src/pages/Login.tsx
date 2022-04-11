import React from "react";
import { LoginContainer } from "../containers/login/LoginContainer";
import useBlockLoginUser from "../hooks/useBlockLoginUser";

export const Login = () => {
  useBlockLoginUser();
  return <LoginContainer />;
};
