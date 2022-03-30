import CommonContainer from "../../layout/CommonContainer";
import { css } from "@emotion/react";
export const ConfirmButton = ({ children, message }: any) => {
  function onClick() {
    if (window.confirm(message)) {
      return;
    }
  }
  return (
    <CommonContainer>
      <div onClick={onClick}>{children}</div>
    </CommonContainer>
  );
};
