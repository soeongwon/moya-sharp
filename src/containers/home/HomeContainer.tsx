import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";

import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchMaster, MasterObj } from "../../utils/master";

const HomeContainer = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setMediaType,
    searchNews
  } = useSearch();

  const [masterObj, setMasterObj] = useState<MasterObj | undefined>();

  useEffect(() => {
    fetchMaster().then(res => {
      setMasterObj(res.master);
    });
  }, []);

  return (
    <>
      <Intro />
      <Search
        openKeywordList={setIsOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setIdentifiersString={setIdentifiers}
        setMediaTypeCode={setMediaType}
        searchNews={searchNews}
      />
      {isOpendKeywordList && (
        <KeywordSelectContainer searchNews={searchNews} master={masterObj} />
      )}
    </>
  );
};

export default HomeContainer;
