import PersonalizeNav from ".";
import TabListContainer from "../tabs/TabListContainer";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const ScrollNavTabs = () => {
  const [navbar, setNavbar] = useState<boolean>(true);
  const [height, setHeight] = useState<boolean>(true);
  const [none, setNone] = useState<boolean>(false);

  const changeBackground = (e: Event) => {
    if (window.scrollY < 399) {
      setNavbar(true);
    } else if (window.scrollY >= 399) {
      setNavbar(false);
    }
  };
  const changeHeight = (e: Event) => {
    if (window.scrollY >= 600) {
      setHeight(false);
    } else {
      setHeight(true);
    }
  };
  const changeNone = (e: Event) => {
    if (window.scrollY > 601) {
      setNone(true);
    } else {
      setNone(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", changeHeight);
    window.addEventListener("scroll", changeNone);
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
// 101px 274px 345px
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
    viewHeight === true ? `345px` : "274px" || none === true ? "101px" : `345px`};
  .pt-30 {
    margin-top: 30px;
  }
`;
