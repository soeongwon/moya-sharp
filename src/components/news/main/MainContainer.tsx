import React from "react";
import NewsList from "./NewsList";
import Options from "./options";
import styled from "@emotion/styled";

const MainContainer = () => {
  // const tabList = arr.filter(keyword => keyword === "일치");

  // 인덱스 순서 일치로 잡자
  //필요한 정보 현재 탭 인덱스 위치 and 데이터리스트의 인덱스 위치
  return (
    <div>
      {(function render() {
        return (
          <>
            <Options />
            <NewsList />
          </>
        );
      })()}
    </div>
  );
};

export default MainContainer;

