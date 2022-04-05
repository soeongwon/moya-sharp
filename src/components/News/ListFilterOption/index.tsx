import styled from "@emotion/styled";
import React from "react";
import Container from "../../common/layout/Container";
import { useNewsFormats } from "../hooks/useNewsFormat";
import AlignmentDropDown from "../../common/DropDown/AlignmentDropDown";
const options = [
  { name: "정렬순", status: "top" },
  { name: "최신순", status: "latest" },
  { name: "인기순", status: "popular" }
];

const ListFiterOption = () => {
  const { changeToTextFormat, changeToImgFormat, clicked, handleTextSize } =
    useNewsFormats();
  return (
    <section id="snb" role="navigation">
      <Container>
        <ListFeatures>
          {/* <span className="result">Results of ‘Silver’</span> */}
          <AlignmentDropDown options={options} />
          <TextSizeControl onClick={handleTextSize} />
          <ImageFormatViewBtn onClick={changeToImgFormat} icon={clicked} />
          <TextFormatViewBtn icon={clicked} onClick={changeToTextFormat} />
        </ListFeatures>
      </Container>
    </section>
  );
};

export default ListFiterOption;
const ListFeatures = styled.div`
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
  icon: boolean;
};

const ImageFormatViewBtn = styled.div<Props>`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ icon }) =>
      icon === true
        ? "url(/images/icon-Grid-filled.svg)"
        : "url(/images/icon-Grid.svg)"}
    no-repeat 4.5%;
`;

const TextFormatViewBtn = styled.div<Props>`
  width: 40px;
  height: 40px;
  background: ${({ icon }) =>
      icon === true
        ? "url(/images/icon-Grid-list.svg)"
        : "url(/images/icon-hamburger-button.svg)"}
    no-repeat 4.5%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
