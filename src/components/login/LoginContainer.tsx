import axios from "axios";
import React, { useCallback } from "react";
import { Login } from "../../components/login/Login";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/user/auth";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const userLogin = useCallback(
    reqData => {
      dispatch(login(reqData));
    },
    [dispatch]
  );
<<<<<<< HEAD:src/containers/login/LoginContainer.tsx
  console.log(useAppSelector(state => state.user));
=======
>>>>>>> f8c0a2f7d4628e8828457aa50327aac467f22be6:src/components/login/LoginContainer.tsx

  return <Login login={userLogin} />;
};
