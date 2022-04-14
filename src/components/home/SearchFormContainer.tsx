import React from "react";
import KeywordSelect from "../../components/home/KeywordSelect";
import Search from "../../components/home/Search";
import { useSearch } from "./hooks/useSearch";
const SearchNavigation = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
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
        setMediaTypeCode={setMediaType}
        searchNews={searchNews}
      />
      {isOpendKeywordList && <KeywordSelect searchNews={searchNews} />}
    </>
  );
};

export default SearchNavigation;
