import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

export default function useNeedLogin() {
  const history = useHistory();
  const isLogin = useAppSelector(state => state.userLogin.isLogin);
  useEffect(() => {
    if (!isLogin) {
      // 민지님 잠시 보류처리할게요. history.replace("/login");
    }
  }, [history, isLogin]);
}
