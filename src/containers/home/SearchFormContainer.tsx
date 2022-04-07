import React from "react";
import KeywordSelectContainer from "./KeywordSelectContainer";
import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";
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
