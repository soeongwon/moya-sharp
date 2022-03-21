import React from "react";
import styled from "@emotion/styled";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import CommonContainer from "../../layout/CommonContainer";
import { useSearch } from "./../../../hooks/useSearch";
import { useScrollHeader } from "../../layout/useScrollHeader";
import { useEffect } from "react";
const PersonalizeNav = () => {
  const {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews
  } = useSearch();

  const { updateScroll, scrollPosition } = useScrollHeader();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <CommonContainer>
      <Search
        openKeywordList={openKeywordList}
        setLanguageCode={setLanguageCode}
        setTimeFilterCode={setTimeFilterCode}
        setIdentifiersString={setIdentifiersString}
        setCategoriesCode={setCategoriesCode}
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
