/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ImageArticle from "./ImageArticle";
import { jsx, css, keyframes } from "@emotion/react";
export type NewsItemType = {
  assetTags: string;
  brandImgUrl: string;
  brandName: string;
  brandUrl: string;
  description: string;
  imageUrl: string;
  language: string;
  mediaType: string;
  newsId: string;
  publishTime: string;
  title: string;
  url: string;
};
const Opacity = keyframes`
  0%  {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
  `;
const ImageArticleList = ({ newListData }: any) => {
  return (
    <>
      {newListData.map((article: NewsItemType, index: number) => (
        <div
          css={css`
            animation: ${Opacity} 1s ease-in-out;
          `}
        >
          <ImageArticle
            key={`${index}-${article.newsId}`}
            {...article}
            article={article}
          />
        </div>
      ))}
    </>
  );
};
export default ImageArticleList;
