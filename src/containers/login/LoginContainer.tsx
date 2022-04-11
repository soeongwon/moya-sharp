import React, { useCallback } from "react";
import { Login } from "../../components/login/Login";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/user/auth";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const userLogin = useCallback(
    reqData => {
      dispatch(login(reqData));
    },
    [dispatch]
  );

  return <Login login={userLogin} />;
};
