import React from "react";
import TextArticle from "./TextArticle";

const TextArticleList = ({ newListData }:any) => {
  return (
    <>
      {newListData.map((article: any, index: number) => (
        <TextArticle key={`${index}-${article.newsId}`} {...article} />
      ))}
    </>
  );
};

export default TextArticleList;
