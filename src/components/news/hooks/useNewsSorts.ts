import type { RootState } from "../../../redux/store";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { changeNewsOption } from "../../../redux/news/newsSortSlice";
//이미지,텍스트 필터와 인기순 최신순 정렬을 필터

export const useNewsSorts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [newsCurOption, setNewsCurOption] = useState<string>("정렬순");

  const dispatch = useAppDispatch();
  const { newsSortState } = useAppSelector(
    (state: RootState) => state.newsSorts
  );

  const showDropDown = (option: string) => {
    setNewsCurOption(option);
    setIsActive(!isActive);
  };

  const reportOptionToAPI = (NewsSortoption: string): void => {
    dispatch(changeNewsOption(NewsSortoption));
  };
  useEffect(() => {}, []);

  return {
    newsSortState,
    isActive,
    setIsActive,
    newsCurOption,
    showDropDown,
    reportOptionToAPI
  };
};
