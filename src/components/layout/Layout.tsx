import React, { ReactChildren, ReactChild } from "react";
import styled from "@emotion/styled";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = props => {
  return (
    <Root className="layout">
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
