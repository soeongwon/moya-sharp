import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";

import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchMaster } from "../../utils/master";

const HomeContainer = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setCategories,
    searchNews
  } = useSearch();

  const isLogin = useAppSelector(state => state.user.isLogin);

  // const [master, setMaster] = useState<{} | undefined>();

  useEffect(() => {
    fetchMaster();
  }, []);

  console.log("home isLogin", isLogin);

  return (
    <>
      <Intro />
      <Search
        openKeywordList={setIsOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setIdentifiersString={setIdentifiers}
        setCategoriesCode={setCategories}
        searchNews={searchNews}
        // master={master}
      />
      {isOpendKeywordList && <KeywordSelectContainer searchNews={searchNews} />}
    </>
  );
};

export default HomeContainer;
