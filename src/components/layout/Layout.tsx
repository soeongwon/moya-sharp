import React, { ReactChildren, ReactChild } from "react";
import styled from "@emotion/styled";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";
import { useLocation } from "react-router-dom";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = props => {
  const location = useLocation();
  const path = location.pathname.slice(1);

  if (path === "login") return <Root>{props.children}</Root>;

  return (
    <Root>
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </Root>
  );
};

const Root = styled.div``;
