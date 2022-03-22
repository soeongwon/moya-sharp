import React from "react";
import styled from "@emotion/styled";
import KeywordSelectContainer from "../../../containers/home/KeywordSelectContainer";
import Search from "../../home/Search";
import CommonContainer from "../../layout/CommonContainer";
import { useSearch } from "./../../../hooks/useSearch";
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
