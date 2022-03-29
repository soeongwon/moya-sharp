import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTitleType } from "../api/newsListApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchNewList } from "../redux/news/newsListSlice";
import { cameltoCababString } from "../utils";
import { useNewsSorts } from "./../components/news/hooks/useNewsSorts";
export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { order_by } = useAppSelector(state => state.newsList);
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

  const searchNews = async (
    searchTitle?: SearchTitleType,
    str?: string,
    order_by?: "top" | "latest" | "popular"
  ) => {
    const identifier = str ? str : identifiers;
    if (str) {
      cameltoCababString(str);
    }
    const searchPayload = {
      order_by:order_by,
      searchTitle,
      identifiers: identifier,
      language,
      timeFilter,
      categories
    };
    const {
      order_by: 정렬,
      searchTitle: 검색타입, // assets | ticker | full
      identifiers: 식별자,
      language: 언어,
      timeFilter: 시간
    } = searchPayload;
    try {
      const query = `?identifier_type=${검색타입}&identifiers=${식별자}&time_filter=${시간}&categories=mp%2Cop&order_by=${정렬}&${언어}`;
      const search = await dispatch(fetchNewList(searchPayload));
      navigate(`/news/${cameltoCababString(query)}`);
      return search;
    } catch (error) {
      console.log("searchError", error);
    }
  };

  return {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews,
    language,
    timeFilter,
    categories
  };
};
