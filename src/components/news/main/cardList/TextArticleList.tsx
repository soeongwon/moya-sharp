import React from "react";
import { Key } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import TextArticle from "./TextArticle";

const TextArticleList = () => {
  const { newListData } = useAppSelector(state => state.newsList);
  return (
    <>
      {newListData.map((article: any) => (
        <TextArticle
          key={article.index}
          newsTitle={article.title}
          newsLink={article.url}
          newsContent={article.description}
          newsSource={article.source}
          publishTime={article.publishTime}
        />
      ))}
    </>
  );
};

export default TextArticleList;
