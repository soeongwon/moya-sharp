import React from "react";
import NewsTabList from "./NewsTabList";
import CommonContainer from "../../layout/CommonContainer";
import styled from "@emotion/styled";

const TabListContainer = () => {
  return (
    <CommonContainer>
      <PositionTop60>
        <NewsTabList />
      </PositionTop60>
    </CommonContainer>
  );
};

export default TabListContainer;
const PositionTop60 = styled.section`
  position: absolute;
  top: calc(100% - 60px);
  z-index: -1;
`;
