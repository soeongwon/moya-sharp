import React from "react";
import { Key } from "react";
import ImageArticle from "./ImageArticle";
import { useAppSelector } from "./../../../../redux/hooks";

// interface Props {
//   uuid: Key | null | undefined;
//   title: string;
//   description: string;
//   imageUrls: string[] | null;
// publishTime
// }



const ImageArticleList = () => {
  const { newListData } = useAppSelector(state => state.newsList);
  console.log(newListData, "이미지 기사 출력");
  return (
    <>
      {newListData.map((article: any, index) => (
        <ImageArticle
          key={article.index}
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
