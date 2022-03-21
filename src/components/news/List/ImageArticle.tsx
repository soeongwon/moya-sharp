import styled from "@emotion/styled";
import { NewsFeatures } from './../common/NewsCommon';
import { useNewsFormats } from './../hooks/useNewsFormat';
import moment from "moment";


interface Props {
  newsTitle: string;
  newsContent: string;
  newsimageUrls: string[] | null;
  newsSource: any;
  newsLink: any;
  publishTime: string;
}

export function changeMoment(publishTime: string) {
  const changeTime = moment(publishTime).fromNow(); // 15 minutes ago

  return changeTime;
}

const ImageArticle = ({
  newsTitle,
  newsContent,
  newsimageUrls,
  newsSource,
  newsLink,
  publishTime
}: Props) => {
  const { textSize } = useNewsFormats();

  const imageFail = (event: any) => {
    const url = event.currentTarget;
    url.src = `/images/img-error.png`;
  };
  return (
    <Wrap>
      <Inner>
        {newsimageUrls !== null ? (
          <Figure>
            <img
              // onLoad={imageOnLoadHandler}
              // onError={imageOnErrorHandler}
              src={`${newsimageUrls}`}
              onError={imageFail}
              alt="기사1"
            />
          </Figure>
        ) : null}
        <NewsFeatures />
        <Title>
          <a href={`${newsLink}`} target="_blank" rel="noreferrer">
            {newsTitle}
          </a>
        </Title>
        <ArticleBody>
          <p className={`${textSize === true ? "small" : "big"}`}>
            {newsContent}
          </p>
        </ArticleBody>
        <ArticleFooter>
          <div className="Jounal-mark">
            <img src={`${newsSource.imageUrl}`} alt="기사1" />
            <span>{newsSource.brandName}</span>
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
