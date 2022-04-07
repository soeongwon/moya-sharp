import React from "react";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import Container from "../../common/layout/Container";
import { useSearch } from "../../../hooks/useSearch";
const SearchNavigation = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setCategories,
    searchNews
  } = useSearch();

  return (
    <>
      <Search
        openKeywordList={setIsOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setIdentifiersString={setIdentifiers}
        setCategoriesCode={setCategories}
        searchNews={searchNews}
      />
      {isOpendKeywordList && <KeywordSelectContainer searchNews={searchNews} />}
    </>
  );
};

export default SearchNavigation;