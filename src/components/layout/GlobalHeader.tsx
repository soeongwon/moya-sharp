import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import CommonContainer from "./CommonContainer";
import  Member  from "./header/Member";
import NonMember from "./header/NonMember";

const GlobalHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { login } = useAppSelector(state => state.users.user);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!scrolled && window.scrollY > 30) {
  //       setScrolled(true);
  //     } else if (scrolled && window.scrollY <= 30) {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.addEventListener("scroll", handleScroll);
  //   };
  // }, [scrolled]);

  return (
    <Wrap className={scrolled ? "fix-container scrolled" : "fix-container"}>
      <CommonContainer className="header">
        <Inner>
          <Link to="/">
            <Logo />
          </Link>
          {login ? <Member /> : <NonMember></NonMember>}
        </Inner>
      </CommonContainer>
    </Wrap>
  );
};

export default GlobalHeader;

const Wrap = styled.header`
  &.fix-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 68px;
    background-color: #fff;
    z-index: 400;
    box-shadow: none;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

const Logo = styled.div`
  width: 62.6px;
  height: 24px;
  background-image: url("/images/icon-Moya-logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

// 비회원
