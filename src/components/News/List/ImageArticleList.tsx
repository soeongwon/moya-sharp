import ImageArticle from "./ImageArticle";

const ImageArticleList = ({ newListData }: any) => {
  return (
    <>
      {newListData.map((article: any, index: number) => (
        <ImageArticle
          key={`${index}-${article.uuid}`}
          newsTitle={article.title}
          newsLink={article.url}
          newsContent={article.description}
          newsimageUrls={article.imageUrls}
          newsSource={article.source}
          publishTime={article.publishTime}
        />
      ))}
    </>
  );
};
export default ImageArticleList;
