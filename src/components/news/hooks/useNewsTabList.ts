import React from "react";
import type { RootState } from "../../../redux/store";
import { useState } from "react";
import { useNewsList } from "./../hooks/useNewsList";
//이미지,텍스트 필터와 인기순 최신순 정렬을 필터

export const useNewsTabList = () => {
  const { userSavedKeywords } = useNewsList();
  const [keywordList, setKeywordlist] = React.useState(userSavedKeywords);
  const [start, setStart] = useState<any>(null); //시작 위치
  const [currentTab, setCurrentTab] = useState(0);

  function selectMenuHandler(index: number) {
    setCurrentTab(index);
  }

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
