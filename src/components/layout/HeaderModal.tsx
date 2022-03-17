import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const HeaderModal = () => {
  return (
    <Modal>
      <Link to="/myPage">마이페이지</Link>
      <Link to="/myPage">키워드 관리</Link>
      <Link to="/myPage">로그아웃</Link>
    </Modal>
  );
};

export default HeaderModal;

const Modal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 183px;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
  background-color: #fff;
  a {
    display: block;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #d9d9d9;
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
    text-align: center;
  }
  a:last-child {
    border: none;
  }
`;
