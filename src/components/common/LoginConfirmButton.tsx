import styled from "@emotion/styled";
import { onLogin } from "../../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ChildProps } from "./../../types/Common";

interface Confirm extends ChildProps {
  message: string;
}

export default function LoginConfirmButton({ children, message }: Confirm) {
  const { login } = useAppSelector(state => state.users.user);
  const dispatch = useAppDispatch();
  function handleClick() {
    if (login && window.confirm(`${message}`)) dispatch(onLogin(false));

    if (!login && window.confirm(`${message}`)) dispatch(onLogin(true));
  }
  return (
    <Button role="button" onClick={handleClick}>
      {children}
    </Button>
  );
}
const Button = styled.div`
  background: none;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
