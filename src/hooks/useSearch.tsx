import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTitleType } from "../api/newsListApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchNewList } from "../redux/news/newsListSlice";
import { cameltoCababString } from "../utils/utils";
export const useSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [categories, setCategories] = useState("mp,op,r");
  const [identifiers, setIdentifiers] = useState("");
  // http://54.180.136.0:3000/search?mediaType=mp,op&timeFilter=w1&language=en&orderBy=latest&keyType=tickers&keyParam=aapl&exchange=nasdaq

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
    const search = await dispatch(fetchNewList(searchPayload));
    navigate(`/news/${cameltoCababString(identifier)}`);
    return search;
  };

  return {
    isOpendKeywordList,
    setIsOpendKeywordList,
    setIdentifiers,
    setLanguage,
    setTimeFilter,
    setCategories,
    searchNews,
    language,
    timeFilter,
    categories
  };
};