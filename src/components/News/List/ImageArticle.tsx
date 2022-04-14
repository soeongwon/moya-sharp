import styled from "@emotion/styled";
import { useNewsFormats } from "./../hooks/useNewsFormat";
import { useEffect, useState } from "react";
import NewsCardFeatures from "../common/NewsCardFeatures";
import { NewsItemType } from "./ImageArticleList";
import { postTranslateAxios } from "../../../api/tranlate";
import changeTimeUnixToStandard from "../../../utils/moment/changeTimeUnixToStandard";
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

const ImageArticle = ({
  brandImgUrl,
  brandName,
  brandUrl,
  description,
  imageUrl,
  publishTime,
  title,
  url
}: Props) => {
  const { textSize } = useNewsFormats();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [translate, setTranslate] = useState<string[]>([]);
  const [titleTranslate, contentTranslate] = translate;
  function handleTranslateActive() {
    setIsActive(!isActive);
  }
  //cors 문제의 경우 이미지 안보여주기
  const imageFail = (event: any) => {
    const url = event.currentTarget;
    return (url.style.display = "none");
  };
  useEffect(() => {
    //번역 버튼을 눌렀을 때 번역시작
    if (isActive) {
      // postTranslateAxios([title, description, setTranslate]);
    }
  }, [description, isActive, title]);
  return (
    <Wrap>
      <Inner>
        <Figure>
          {imageUrl && (
            <img src={`${imageUrl}`} onError={imageFail} alt="기사" />)}

        </Figure>
        <NewsCardFeatures handleTranslateActive={handleTranslateActive} />
        <Title>
          <a href={`${url}`} target="_blank" rel="noreferrer">
            {!isActive && title}
            {isActive && titleTranslate}
          </a>
        </Title>
        <ArticleBody>
          <p className={`${textSize === true ? "small" : "big"}`}>
            {!isActive && description}
            {isActive && contentTranslate}
          </p>
        </ArticleBody>
        <ArticleFooter>
          <div className="Jounal-mark">
            <img src={`${brandImgUrl}`} alt="기사1" onError={imageFail} />
            <span>{brandName}</span>
          </div>
          <div className="article-time">
            {changeTimeUnixToStandard(publishTime)}
          </div>
        </ArticleFooter>
      </Inner>
    </Wrap>
  );
};

export default ImageArticle;

const Wrap = styled.article`
  display: inline-block;

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
  width: 360px;
  img {
    width: inherit;
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