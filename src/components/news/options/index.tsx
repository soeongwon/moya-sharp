import styled from "@emotion/styled";
import React from "react";
import CommonContainer from "../../layout/CommonContainer";
import { useNewsFormats } from "../hooks/useNewsFormat";
import SortOptionList from "./SortOptionList";

const Options = () => {
  const { changeToTextFormat, changeToImgFormat, focused, handleTextSize } =
    useNewsFormats();
  return (
    <CommonContainer>
      <Features>
        {/* <span className="result">Results of ‘Silver’</span> */}
        <SortOptionList />
        <TextSizeControl onClick={handleTextSize} />
        <ImageFormatViewBtn onClick={changeToImgFormat} focused={focused} />
        <TextFormatViewBtn focused={focused} onClick={changeToTextFormat} />
      </Features>
    </CommonContainer>
  );
};

export default Options;

const Features = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #d9d9d9;
  .result {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    font-family: "Noto Sans";
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #2d2d2d;
  }
`;

const TextSizeControl = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Text-Size.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
type Props = {
  focused: boolean;
};
const ImageFormatViewBtn = styled.div<Props>`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ focused }) =>
      focused === true
        ? "url(/images/icon-Grid-filled.svg)"
        : "url(/images/icon-Grid.svg)"}
    no-repeat 4.5%;
`;

const TextFormatViewBtn = styled.div<Props>`
  width: 40px;
  height: 40px;
  background: ${({ focused }) =>
      focused === true
        ? "url(/images/icon-Grid-list.svg)"
        : "url(/images/icon-hamburger-button.svg)"}
    no-repeat 4.5%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
