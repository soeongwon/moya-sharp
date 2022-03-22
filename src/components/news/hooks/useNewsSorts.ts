import type { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSearch } from "../../../hooks/useSearch";
export const useNewsSorts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [newsCurOption, setNewsCurOption] = useState<any>("정렬순");

  // const dispatch = useAppDispatch();
  // const { searchNews } = useSearch();
  // const { identifier } = useParams();

  const showDropDown = (option: any) => {
    setNewsCurOption(option);
    setIsActive(!isActive);
  };

  // useEffect(() => {
  //   searchNews('Sector',identifier,newsCurOption.status)
  // }, [identifier, newsCurOption]);

  return {
    isActive,
    setIsActive,
    newsCurOption,
    showDropDown
  };
};
