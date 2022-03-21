import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { changeMoment } from "./ImageArticle";
import { NewsFeatures } from "./../common/NewsCommon";

interface Props {
  newsTitle: string;
  newsContent: string;
  newsSource: any;
  newsLink: any;
  publishTime: string;
}

const TextArticle = ({
  newsTitle,
  newsContent,
  newsSource,
  newsLink,
  publishTime
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function showContent() {
    setIsActive(!isActive);
  }

  return (
    <Wrap>
      <NewsFeatures></NewsFeatures>
      <Title>
        <a href={`${newsLink}`} target="_blank" rel="noreferrer">
          {newsTitle}
        </a>
      </Title>
      <ArticleFooter>
        <div className="logo">
          <img src={`${newsSource.imageUrl}`} alt="기사1" />
          {newsSource.brandName}
          <div className="article-time">{changeMoment(publishTime)}</div>
        </div>
        <i className="nav-btn" role="button" onClick={showContent}>
          미리 보기
        </i>
      </ArticleFooter>
      {isActive === true ? <ArticleBody>{newsContent}</ArticleBody> : null}
    </Wrap>
  );
};

export default TextArticle;

const Wrap = styled.article`
  width: 100%;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-family: NotoSans-Display;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
  a {
    text-decoration: none;
    color: #1d1d1d;
  }
`;

const ArticleFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-sizing: content-box;
  .ImageFormatView {
    display: flex;
    justify-items: space-between;
    align-items: center;
  }
  .Jounal-mark {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    border-radius: 50%;
  }
  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  .article-time {
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.86;
    letter-spacing: normal;
    text-align: left;
    color: #313131;
    margin-right: 70px;
    margin-left: 28px;
  }
  .nav-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    font-size: 0;
    cursor: pointer;
  }
`;
const ArticleBody = styled.p`
  color: #7a7a7a;
  font-family: NotoSans-Display;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: -0.16px;
  padding-bottom: 19.5px;
  border-bottom: 1px solid #dfdfdf; ;
`;
