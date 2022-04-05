import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MouseEvent } from "react";
import { album, text } from "../../../redux/news/newsformatSlice";
import { useState } from "react";

export const useNewsFormats = () => {
  const dispatch = useAppDispatch();

  const { NewsFormats } = useAppSelector((state: RootState) => state.formats);
  const [clicked, setClicked] = useState<boolean>(true);
  const [textSize, setTextSize] = useState<boolean>(true);

  const changeToImgFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(album());
    setClicked(true);
  };

  const changeToTextFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(text());
    setClicked(false);
  };

  const handleTextSize = () => setTextSize(!textSize);

  return {
    NewsFormats,
    changeToTextFormat,
    changeToImgFormat,
    setClicked,
    clicked,
    textSize,
    handleTextSize
  };
};
