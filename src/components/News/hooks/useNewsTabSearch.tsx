import { useSearch } from "../../../hooks/useSearch";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import { SearchTitleType } from "../../../api/newsListApi";
import { useAppDispatch } from "../../../redux/hooks";
export const useNewsTabSearch = () => {
  const { language, timeFilter,categories } = useSearch();
  const dispatch = useAppDispatch();
  const searchTabKeywordNews = (
    myKeyword: string,
    searchTitle?: SearchTitleType
  ) => {
    const searchPayload = {
      searchTitle,
      identifiers: myKeyword,
      language,
      timeFilter,
      categories
    };
    dispatch(fetchNewList(searchPayload));
  };
  return { searchTabKeywordNews };
};
