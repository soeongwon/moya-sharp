import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import Container from "./Container";
import Member from "./header/Member";
import NonMember from "./header/NonMember";
const HeaderSeachbar = () => {
  return (
    <SearchWrap>
      <Form>
        <Input placeholder="키워드 검색관리" />
        <i className="search-btn" role="button">
          검색
        </i>
      </Form>
    </SearchWrap>
  );
};
const GlobalHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { login } = useAppSelector(state => state.users.user);
  return (
    <Wrap id="fixed-bar" className="fixed-bar-box-shadow">
      <Container className="header">
        <Inner>
          <Link to="/">
            <Logo />
          </Link>
          <HeaderSeachbar />
          {login ? <Member /> : <NonMember></NonMember>}
        </Inner>
      </Container>
    </Wrap>
  );
};

export default GlobalHeader;

const Wrap = styled.header`
  &.fixed-bar-box-shadow {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    height: 68px;
    background-color: #fff;
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

const SearchWrap = styled.div`
  margin-left: 200px;
`;
const Form = styled.form`
  position: relative;
  width: 435px;
  height: 48px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  i.search-btn {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 40px;
    height: 40px;
    transform: translateY(-50%);
    background: #48c0b7;
    background-image: url("/images/icon-serach-wh.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 50%;
    font-size: 0;
    border-radius: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #e1e1e1;
    padding-left: 10px;
  }
`;

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
