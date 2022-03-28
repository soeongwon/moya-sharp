import Nav from "./Nav";
import TabListContainer from "../tabs/TabListContainer";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const NavContainer = () => {
  const [background, setBackground] = useState<boolean>(true);
  const [height, setHeight] = useState<boolean>(true);
  const [none, setNone] = useState<boolean>(false);

  function ScrollEvent(e: Event) {
    if (window.scrollY < 399) {
      setBackground(true);
    } else if (window.scrollY >= 399) {
      setBackground(false);
    }

    if (window.scrollY >= 500) {
      setHeight(false);
    } else {
      setHeight(true);
    }

    if (window.scrollY > 501) {
      setNone(true);
    } else {
      setNone(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      setBackground(true);
      setHeight(true);
      setNone(false);
    };
  }, []);

  return (
    <ScrollView background={background} viewHeight={height} none={none}>
      {none ? null : (
        <div className="pt-30">
          <Nav />
        </div>
      )}
      <TabListContainer />
    </ScrollView>
  );
};
interface Props {
  background: boolean;
  viewHeight: boolean;
  none: boolean;
}

export default NavContainer;
const ScrollView = styled.div<Props>`
  position: fixed;
  top: 68px;
  right: 0;
  left: 0;
  z-index: 100;
  background-image: ${({ background }) =>
    background &&
    `linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );`};
  box-shadow: ${({ background }) =>
    background === false && `0px 5px 5px rgba(0, 0, 0, 0.2)`};
  background-color: #fff;
  height: ${({ viewHeight, none }) =>
    viewHeight ? `345px` : "274px" || none ? "98px" : `345px`};
  .pt-30 {
    margin-top: 30px;
  }
`;
