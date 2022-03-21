import { useEffect } from "react";
import type { RootState } from "../../../redux/store";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
export function useNewsList() {
  const userSavedKeywords = useAppSelector(
    (state: RootState) => state.memberDatas.userSavedKeywords
  );
  const userCurrentTab = useAppSelector(
    (state: RootState) => state.memberDatas.userCurrentTab
  );

  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);

  return {
    userSavedKeywords,
    userCurrentTab
  };
}
