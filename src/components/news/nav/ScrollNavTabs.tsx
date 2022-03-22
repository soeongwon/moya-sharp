import PersonalizeNav from ".";
import TabListContainer from "../tabs/TabListContainer";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const ScrollNavTabs = () => {
  const [navbar, setNavbar] = useState<boolean>(true);
  const [height, setHeight] = useState<boolean>(true);
  const [none, setNone] = useState<boolean>(false);

  function ScrollEvent(e: Event) {
    if (window.scrollY < 399) {
      setNavbar(true);
    } else if (window.scrollY >= 399) {
      setNavbar(false);
    }

    if (window.scrollY >= 600) {
      setHeight(false);
    } else {
      setHeight(true);
    }

    if (window.scrollY > 601) {
      setNone(true);
    } else {
      setNone(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return function cleanUp() {
      setNavbar(true);
      setHeight(true);
      setNone(false);
    };
  }, []);

  return (
    <ScrollView navbar={navbar} viewHeight={height} none={none}>
      {none ? null : (
        <div className="pt-30">
          <PersonalizeNav />
        </div>
      )}
      <TabListContainer />
    </ScrollView>
  );
};
interface Props {
  navbar: boolean;
  viewHeight: boolean;
  none: boolean;
}

export default ScrollNavTabs;
const ScrollView = styled.div<Props>`
  position: fixed;
  top: 68px;
  right: 0;
  left: 0;
  z-index: 100;
  background-image: ${({ navbar }) =>
    navbar
      ? `linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );`
      : null};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: ${({ viewHeight, none }) =>
    viewHeight === true
      ? `345px`
      : "274px" || none === true
      ? "101px"
      : `345px`};
  .pt-30 {
    margin-top: 30px;
  }
`;
