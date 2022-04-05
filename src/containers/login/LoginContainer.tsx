import React, { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../../components/login/Login";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/user/auth";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(state => state.users.isLogin);

  const userLogin = useCallback(
    reqData => {
      dispatch(login(reqData));
    },
    [dispatch]
  );

  console.log(useAppSelector(state => state.users));

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Login login={userLogin} />;
};
