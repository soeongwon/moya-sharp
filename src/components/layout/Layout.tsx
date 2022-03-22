import React, { ReactChildren, ReactChild } from "react";
import styled from "@emotion/styled";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = props => {
  return (
    <Root>
      <GlobalHeader />
      <main>{props.children}</main>
      <GlobalFooter />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  main {
    height: 100%;
    margin-top: 68px;
    margin-bottom: 198px;
  }
`;
