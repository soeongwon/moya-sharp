import React from "react";
import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";
import { master } from "../../utils/master";
import KeywordSelectContainer from "./KeywordSelectContainer";
const SearchNavigation = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setMediaType,
    searchNews
  } = useSearch();

  return (
    <>
      <Search
        openKeywordList={setIsOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setIdentifiersString={setIdentifiers}
        setMediaTypeCode={setMediaType}
        searchNews={searchNews}
      />
      {isOpendKeywordList && (
        <KeywordSelectContainer master={master} searchNews={searchNews} />
      )}
    </>
  );
};

export default SearchNavigation;
