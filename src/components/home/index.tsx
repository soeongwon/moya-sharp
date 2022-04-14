import Intro from "../../components/home/Intro";
import Search from "../../components/home/Search";
import { useSearch } from "./hooks/useSearch";
import { useEffect } from "react";
import { fetchMaster } from "../../utils/master";
import KeywordSelect from "../../components/home/KeywordSelect";

const HomeContainer = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setLanguage,
    setTimeFilter,
    setMediaType,
    searchNews
  } = useSearch();

  useEffect(() => {
    fetchMaster();
  }, []);

  return (
    <>
      <Intro />
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

export default HomeContainer;