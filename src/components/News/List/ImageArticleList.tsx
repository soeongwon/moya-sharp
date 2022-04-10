import ImageArticle from "./ImageArticle";
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

const ImageArticleList = ({ newListData }: any) => {
  return (
    <>
      {newListData.map((article: NewsItemType, index: number) => (
        <ImageArticle
          key={`${index}-${article.newsId}`}
          {...article}
          article={article}
        />
      ))}
    </>
  );
};
export default ImageArticleList;
