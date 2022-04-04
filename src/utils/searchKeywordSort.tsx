import searchKeyword from "../assets/csvjson.json";

<<<<<<< HEAD:src/hooks/useSearchKeywordSort.tsx
export const useSearchKeywordSort = () => {
=======
export const searchKeywordSort = () => {
  //   console.log(searchKeyword.sort((a: any, b: any) => a.name - b.name));
>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037:src/utils/searchKeywordSort.tsx
  return searchKeyword.sort((a: any, b: any) => a.name - b.name);
};
