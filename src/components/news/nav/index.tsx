import React from "react";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import CommonContainer from "../../layout/CommonContainer";
import { useSearch } from "./../../../hooks/useSearch";
import { useScrollHeader } from "../../layout/useScrollHeader";
import { useEffect } from "react";
const PersonalizeNav = () => {
  const {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setCategories,
    searchNews
  } = useSearch();

  const { updateScroll, scrollPosition } = useScrollHeader();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <CommonContainer>
      <Search
        openKeywordList={setIsOpendKeywordList}
        setLanguageCode={setLanguage}
        setTimeFilterCode={setTimeFilter}
        setIdentifiersString={setIdentifiers}
        setCategoriesCode={setCategories}
        searchNews={searchNews}
      />
      {isOpendKeywordList && <KeywordSelectContainer searchNews={searchNews} />}
    </CommonContainer>
  );
};

export default PersonalizeNav;

interface Props {
  scrollPosition: number;
}
