import Nav from "./Nav";
import styled from "@emotion/styled";
import { useAppSelector } from "../../../redux/hooks";
import TabList from "./TabList";
import ConfirmButton from "../../common/ConfirmButton";
import { useEffect, useState } from "react";
import Container from "../../common/Container";

const NavContainer = () => {
  const { login } = useAppSelector(state => state.users.user);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 130) {
        setScrolled(true);
      } else if (scrolled && window.scrollY < 30) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <Wrap>
      {login && (
        <MemberArea
          className={scrolled ? "fix-container scrolled" : "fix-container"}
        >
          <Container>
            {!scrolled && <Nav />}
            <TabList />
          </Container>
        </MemberArea>
      )}
      {!login && (
        <NonMemberArea
          className={scrolled ? "fix-container scrolled" : "fix-container"}
        >
          <Container>
            {!scrolled && <Nav />}
            <ConfirmButton message="회원 전용입니다. 로그인 하시겠습니까?">
              <TabAddBtn role="button">
                <i>+</i>
                <span>키워드 추가</span>
              </TabAddBtn>
            </ConfirmButton>
          </Container>
        </NonMemberArea>
      )}
    </Wrap>
  );
};
//

export default NavContainer;
const Wrap = styled.section``;

const NonMemberArea = styled.div`
  &.fix-container {
    height: 345px;
    background: linear-gradient(
      210.25deg,
      #ffffff -118.14%,
      #dff8f4 22.93%,
      #fdddd2 141.11%
    );
    padding-top: 40px;
    box-sizing: border-box;
  }
  &.fix-container.scrolled {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 300;
    height: auto;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;
//345,274,98
const MemberArea = styled.div`
  &.fix-container {
    height: 345px;
    background: linear-gradient(
      210.25deg,
      #ffffff -118.14%,
      #dff8f4 22.93%,
      #fdddd2 141.11%
    );
    padding-top: 40px;
    box-sizing: border-box;
  }
  &.fix-container.scrolled {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 300;
    height: auto;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const TabAddBtn = styled.div`
  display: flex;
  align-items: center;
  width: 166px;
  height: 60px;
  font-family: NotoSans-Display;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  outline: none;
  border: none;
  background-color: ${props => props.theme.BlueGreenColor};
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;
  padding-left: 14px;
  cursor: pointer;
  i {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-add-white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 0;
    box-sizing: border-box;
  }
`;
