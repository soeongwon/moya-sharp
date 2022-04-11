import styled from "@emotion/styled";

import { useNewsFormats } from "./../hooks/useNewsFormat";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCardFeatures from "../common/NewsCardFeatures";
import { NewsItemType } from "./ImageArticleList";

interface Props {
  brandImgUrl: string;
  brandName: string;
  brandUrl: string;
  description: string;
  imageUrl: string;
  // mediaType,
  publishTime: string;
  title: string;
  url: string;
  article: NewsItemType;
}

export function changeMoment(publishTime: string) {
  const changeTime = moment(publishTime).fromNow(); // 15 minutes ago
  return changeTime;
}

const ImageArticle = ({
  brandImgUrl,
  brandName,
  brandUrl,
  description,
  imageUrl,
  publishTime,
  title,
  url,
  article
}: Props) => {
  const { textSize } = useNewsFormats();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [translateText, setTranslateText] = useState<string[]>([
    title,
    description
  ]);
  const [newsTitle, newsDescription] = translateText;
  useEffect(() => {
    //뉴스기사 번역 API 송출
    if (isActive) {
      const postTranslateAxios = async () => {
        const TranslateAxiosBody = {
          token: "sysmetic1234",
          targetLists: [newsTitle, newsDescription]
        };
        const response = await axios.post(
          "https://api.moya.ai/translate_moya",
          TranslateAxiosBody
        );
        setTranslateText(response.data.translated);
        return response;
      };
      postTranslateAxios();
    }
    return () => setIsActive(false);
  }, [isActive, newsDescription, newsTitle]);
  //번역 on,off
  function handleTranslateActive() {
    setIsActive(!isActive);
  }
  //cors 문제의 경우 이미지 안보여주기
  const imageFail = (event: any) => {
    const url = event.currentTarget;
    return (url.style.display = "none");
  };
  return (
    <Wrap>
      <Inner>
        {imageUrl && (
          <Figure>
            <img src={`${imageUrl}`} onError={imageFail} alt="기사" />
          </Figure>
<<<<<<< HEAD
        )}
        <NewsCardFeatures handleTranslateActive={handleTranslateActive} />
=======
        ) : null}
        <NewsCardFeatures
          handleTranslateActive={handleTranslateActive}
          article={article}
        />
>>>>>>> e8de2decb17d9a7f9ec85ea73fdb9eadc9522777
        <Title>
          <a href={`${url}`} target="_blank" rel="noreferrer">
            {newsTitle}
          </a>
        </Title>
        <ArticleBody>
          <p className={`${textSize === true ? "small" : "big"}`}>
            {newsDescription}
          </p>
        </ArticleBody>
        <ArticleFooter>
          <div className="Jounal-mark">
            <img src={`${brandImgUrl}`} alt="기사1" onError={imageFail} />
            <span>{brandName}</span>
          </div>
          <div className="article-time">{changeMoment(publishTime)}</div>
        </ArticleFooter>
      </Inner>
    </Wrap>
  );
};

export default ImageArticle;

const Wrap = styled.article`
  display: inline-block;
  width: 400px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  margin-bottom: 22px;
`;
const Inner = styled.div`
  padding-top: 20px;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
`;
const Figure = styled.figure`
  img {
    width: 360px;
    height: 300px;
    margin: 0;
  }
`;

const ArticleBody = styled.div`
  p {
    color: #7a7a7a;
    font-family: NotoSans-Display;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.5rem;
    letter-spacing: -0.16px;
    padding-bottom: 19.5px;
    border-bottom: 1px solid #dfdfdf;
  }
  .small {
    font-size: 16px;
  }
  .big {
    font-size: 32px;
  }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  margin: 14px 0;
  .Jounal-mark {
    display: flex;
    align-items: center;
    height: 30px;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      font-size: 14px;
      font-weight: 300;
      font-stretch: normal;
      line-height: 0.86;
      color: #313131;
      margin-left: 5px;
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
  }
`;
