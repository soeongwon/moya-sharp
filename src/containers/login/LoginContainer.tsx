import React, { useCallback } from "react";
import { Login } from "../../components/login/Login";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/user/auth";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(state => state.user.isLogin);

  const userLogin = useCallback(
    reqData => {
      dispatch(login(reqData));
    },
    [dispatch]
  );

  console.log(useAppSelector(state => state.user));

  return <Login login={userLogin} />;
};
