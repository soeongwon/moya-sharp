import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTitleType } from "../api/newsListApi";
import { useAppDispatch } from "../redux/hooks";
import { fetchNewList } from "../redux/news/newsListSlice";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [categories, setCategories] = useState("mp,op,r");
  const [identifiers, setIdentifiers] = useState("");

  function openKeywordList(isOpend: boolean) {
    setIsOpendKeywordList(isOpend);
  }

  function setIdentifiersString(Identifier: string) {
    setIdentifiers(Identifier);
  }
  const setLanguageCode = (langCode: string) => {
    setLanguage(langCode);
  };
  const setTimeFilterCode = (timeCode: string) => {
    setTimeFilter(timeCode);
  };
  const setCategoriesCode = (categoriesCode: string) => {
    setCategories(categoriesCode);
  };

  const searchNews = (searchTitle?: SearchTitleType, str?: string) => {
    const identifier = str ? str : identifiers;
    const searchPayload = {
      searchTitle,
      identifiers: identifier,
      language,
      timeFilter,
      categories
    };
    dispatch(fetchNewList(searchPayload));
    navigate("/news");
  };

  return {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews
  };
};
