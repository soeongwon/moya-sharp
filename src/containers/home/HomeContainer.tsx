import Intro from "../../components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";

import Search from "../../components/home/Search";
import { useSearch } from "../../hooks/useSearch";

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
