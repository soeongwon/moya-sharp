import searchKeyword from "../assets/csvjson.json";

export const useSearchKeywordSort = () => {
  //   console.log(searchKeyword.sort((a: any, b: any) => a.name - b.name));
  return searchKeyword.sort((a: any, b: any) => a.name - b.name);
};
