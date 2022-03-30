import React from "react";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import Container from "../../common/Container";
import { useSearch } from "../../../hooks/useSearch";
const Nav = () => {
  const {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews
  } = useSearch();

  return (
    <>
      <Search
        openKeywordList={openKeywordList}
        setLanguageCode={setLanguageCode}
        setTimeFilterCode={setTimeFilterCode}
        setIdentifiersString={setIdentifiersString}
        setCategoriesCode={setCategoriesCode}
        searchNews={searchNews}
      />
      {isOpendKeywordList && <KeywordSelectContainer searchNews={searchNews} />}
    </>
  );
};

export default Nav;
