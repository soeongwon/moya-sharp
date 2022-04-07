import ImageArticle from "./ImageArticle";

const ImageArticleList = ({ newListData }: any) => {
  return (
    <>
      {newListData.map((article: any, index: number) => (
        <ImageArticle key={`${index}-${article.newsId}`} {...article} />
      ))}
    </>
  );
};
export default ImageArticleList;
