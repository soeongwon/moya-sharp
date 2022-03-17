import type { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
//이미지,텍스트 필터와 인기순 최신순 정렬을 필터

export const useNewsSorts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [newsCurOption, setNewsCurOption] = useState<String>("정렬순");

  const { newsSortState } = useAppSelector(
    (state: RootState) => state.newsSorts
  );

  const showDropDown = (option: string) => {
    setNewsCurOption(option);
    setIsActive(!isActive);
  };
  useEffect(() => {}, []);

  return {
    newsSortState,
    isActive,
    setIsActive,
    newsCurOption,
    showDropDown
  };
};
