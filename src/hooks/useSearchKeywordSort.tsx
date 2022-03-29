import searchKeyword from "../assets/csvjson.json";

export const useSearchKeywordSort = () => {
  return searchKeyword.sort((a: any, b: any) => a.name - b.name);
};
