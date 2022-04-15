import React, { useEffect, useState } from "react";
import { fetchMaster } from "../../utils/master";
import { useSearch } from "./hooks/useSearch";
import KeywordSelect from "./KeywordSelect";
import Search from "./searchComponents/Search";

const SearchContainer = () => {
  const { setLanguage, setTimeFilter, setMediaType, searchNews } = useSearch();
  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);

  useEffect(() => {
    fetchMaster();
  }, []);
  return (
    <>
      <Search
        setIsOpendKeywordList={setIsOpendKeywordList}
        isOpendKeywordList={isOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setMediaTypeCode={setMediaType}
        searchNews={searchNews}
      />
      {isOpendKeywordList && <KeywordSelect searchNews={searchNews} />}
    </>
  );
};

export default SearchContainer;
