import { useAppDispatch } from "../../../redux/hooks";
import { onLogin } from "../../../redux/user/userSlice";
export function useLogin() {
  const dispatch = useAppDispatch();
  function loginConfirm() {
    if (window.confirm(`로그인 하시겟습니까`)) {
      dispatch(onLogin(true));
    }
  }
  return { loginConfirm };
}
