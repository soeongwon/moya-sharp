import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { onLogin } from "../../../redux/user/userSlice";

const HeaderModal = ({ open, onOpen }: any) => {
  const dispatch = useAppDispatch();

  function ModalOffButton({ children }: any) {
    function handleClick() {
      if (open === true) onOpen(false);
      else onOpen(true);
    }
    return <div onClick={handleClick}>{children}</div>;
  }

  function LogOutConfirmButton({ children, message }: any) {
    function handleClick() {
      if (window.confirm(`${message}`)) dispatch(onLogin(false));
      else dispatch(onLogin(true));
    }
    return (
      <div role="button" className="logout-btn" onClick={handleClick}>
        {children}
      </div>
    );
  }

  return (
    <Modal>
      <ModalOffButton>
        <Link to="/myPage">마이페이지</Link>
        <Link to="/myPage">키워드 관리</Link>
        <LogOutConfirmButton message="로그아웃 하시겠습니까?">
          <span>로그아웃</span>
        </LogOutConfirmButton>
      </ModalOffButton>
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
  z-index: 199;
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
  .logout-btn {
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
    cursor: pointer;
  }
`;
