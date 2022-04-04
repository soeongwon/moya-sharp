import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";

import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../redux/hooks";

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
      />
      {isOpendKeywordList && <KeywordSelectContainer searchNews={searchNews} />}
    </>
  );
};

export default HomeContainer;
