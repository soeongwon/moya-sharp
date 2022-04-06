import React from "react";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import { useSearch } from "../../../hooks/useSearch";
import { master } from "../../../utils/master";
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
