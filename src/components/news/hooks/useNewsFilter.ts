import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import { MouseEvent } from "react";
import { changeNewsOption } from "../../../redux/news/newsSortSlice";


export const useNewsFilter = () => {
  const dispatch = useAppDispatch();

  const reportOptionToAPI = (NewsSortoption: string): void => {
    dispatch(changeNewsOption(NewsSortoption));
  };

  return {
    // newsSortState,
    reportOptionToAPI,
  };
};
