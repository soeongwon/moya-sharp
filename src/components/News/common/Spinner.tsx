/** @jsxImportSource @emotion/react */
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

const Spinner = () => {
  return (
    <Loader
      css={css`
        animation: ${LoaderAnimation} 1s linear infinite;
      `}
    ></Loader>
  );
};
export default Spinner;

const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;
const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
