import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

export default function useNeedLogin() {
  const history = useHistory();
  const isLogin = useAppSelector(state => state.user.isLogin);
  useEffect(() => {
    if (!isLogin) {
      history.replace("/login");
    }
  }, [history, isLogin]);
}
