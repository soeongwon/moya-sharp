import React from "react";
import FormatView from "./cardList/FormatView";
import styled from "@emotion/styled";
import { useNewsSorts } from "../hooks/useNewsSorts";
const NewsList = () => {
  const { newsSortState, newsCurOption } = useNewsSorts();
  console.log(newsSortState);
  return (
    <ViewFilter>
      {(function viewList() {
        if (newsSortState === "top" && newsCurOption === "정렬순") {
          return <FormatView />;
        } else if (newsSortState === "latest" && newsCurOption === "최신순") {
          return <FormatView />;
        } else if (newsSortState === "populer" && newsCurOption === "인기순") {
          return <FormatView />;
        } else {
          return null;
        }
      })()}
    </ViewFilter>
  );
};

export default NewsList;

const ViewFilter = styled.div`
  min-height: 500px;
`;
