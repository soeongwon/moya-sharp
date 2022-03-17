import styled from "@emotion/styled";
import React, { useEffect } from "react";
import CommonContainer from "../../../layout/CommonContainer";
import TextArticleList from "./TextArticleList";
import ImageArticleList from "./ImageArticleList";
import { useNewsFormats } from "./../../hooks/useNewsFormat";
// 이미지 형식 텍스트 형식으로 기사를 전환시킵니다
const FormatView = () => {
  const { NewsFormats } = useNewsFormats();
  useEffect(() => {}, []);
  console.log(NewsFormats, "포맷");
  return (
    <CommonContainer>
      {(function test() {
        switch (true) {
          case NewsFormats === "Image":
            return (
              <ImageContent>
                <ImageArticleList />
              </ImageContent>
            );
          case NewsFormats === "Text":
            return (
              <TextContent>
                <TextArticleList />;
              </TextContent>
            );
          default:
            return null;
        }
      })()}
    </CommonContainer>
  );
};

export default FormatView;

const ImageContent = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
`;
const TextContent = styled.div`
  width: 100%;
  padding-bottom: 280px;
`;
//데이터를 [0]번째 인덱스만 출력하게해라
