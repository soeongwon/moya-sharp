import React from "react";
import TextArticle from "./TextArticle";

const TextArticleList = ({ newListData }: any) => {
  return (
    <>
      {newListData.map((article: any, index: number) => (
        <TextArticle
          key={`${index}-${article.uuid}`}
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
