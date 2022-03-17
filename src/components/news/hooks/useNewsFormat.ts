import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MouseEvent } from "react";
import { album, text } from "../../../redux/news/newsformatSlice";
import { useState } from "react";

export const useNewsFormats = () => {
  const dispatch = useAppDispatch();

  const { NewsFormats } = useAppSelector((state: RootState) => state.formats);
  const [focused, setFocused] = useState<boolean>(true);
  const changeToImgFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(album());
    setFocused(true);
  };

  const changeToTextFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(text());
    setFocused(false);
  };
  return {
    NewsFormats,
    changeToTextFormat,
    changeToImgFormat,
    setFocused,
    focused
  };
};
