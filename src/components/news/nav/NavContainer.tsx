import Nav from "./Nav";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavContainer } from "../hooks/useNavContainer";
import { useAppSelector } from "../../../redux/hooks";
import TabListContainer from "./TabListContainer";

const NavContainer = () => {
  const {
    ScrollEvent,
    background,
    height,
    searchFormHidden,
    setBackground,
    setHeight,
    setSeacrchFormHidden,
    navHidden
  } = useNavContainer();

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      setBackground(true);
      setHeight(true);
      setSeacrchFormHidden(false);
    };
  }, []);
  const { login } = useAppSelector(state => state.users.user);
  return (
    <Wrap
      onbackground={background}
      onheight={height}
      onSearchHidden={searchFormHidden}
      onNavHidden={navHidden}
    >
      {searchFormHidden === false && <Nav />}
      <TabListContainer />
    </Wrap>
  );
};
//

interface Props {
  onbackground: boolean;
  onheight: boolean;
  onSearchHidden: boolean;
  onNavHidden: boolean;
}

export default NavContainer;
const Wrap = styled.div<Props>`
  position: fixed;
  top: 68px;
  right: 0;
  left: 0;
  z-index: 100;
  background-image: ${({ onbackground }) =>
    onbackground &&
    `linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );`};
  box-shadow: ${({ onbackground }) =>
    onbackground === false && `0px 5px 5px rgba(0, 0, 0, 0.2)`};
  background-color: #fff;
  height: ${({ onheight, onSearchHidden }) =>
    onheight ? `345px` : "274px" || onSearchHidden ? "98px" : `345px`};
  visibility: ${({ onNavHidden }) =>
    onNavHidden &&
    `hidden
  ;`};
`;
