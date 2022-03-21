import React from "react";
import type { RootState } from "../../../redux/store";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useSearch } from "../../../hooks/useSearch";
import { useNewsTabSearch } from "./useNewsTabSearch";

export const useNewsTabList = () => {
  const dataList = useAppSelector(state => state.keywords);
  const [keywordList, setKeywordlist] = React.useState(dataList);
  const [start, setStart] = useState<any>(null); //시작 위치
  const [currentTab, setCurrentTab] = useState(0);
  const { searchTabKeywordNews } = useNewsTabSearch();
  function selectMenuHandler(index: number) {
    setCurrentTab(index);
    searchTabKeywordNews(keywordList[currentTab].data);
  }
  // console.log(keywordList[currentTab].data)

  function dragOver(e: any) {
    e.preventDefault();
  }

  function dragstart(e: any) {
    const target = e.target as HTMLElement;
    setStart(target);
    console.log(target);
    target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", `${target}`);
  }

  function dragEnd(e: any) {
    const target = e.target as HTMLElement;
    target.classList.remove("grabbing");
    e.dataTransfer.dropEffect = "move"; //drag effeect
  }

  function drop(e: any) {
    const target = e.target as HTMLElement;
    target.classList.remove("grabbing");
    target.classList.toggle("active");
    let startPosition: number = Number(start.dataset.position);
    let endPosition: number = Number(target.dataset.position);
    console.log(endPosition);
    let newKeywordList = [...keywordList];
    newKeywordList[startPosition] = newKeywordList.splice(
      endPosition,
      1,
      newKeywordList[startPosition]
    )[0];

    setKeywordlist(newKeywordList);
  }

  return {
    keywordList,
    currentTab,
    selectMenuHandler,
    dragstart,
    dragOver,
    dragEnd,
    drop
  };
};
