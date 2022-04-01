import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { ChildProps } from "../../../types/Common";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import LoginConfirmButton from "./../../common/LoginConfirmButton";

const HeaderModal = ({ open, onOpen }: any) => {
  const dispatch = useAppDispatch();

  function ModalOffButton({ children }: ChildProps) {
    function handleClick() {
      if (open === true) onOpen(false);
      else onOpen(true);
    }
    return <div onClick={handleClick}>{children}</div>;
  }

  return (
    <Modal>
      <ModalOffButton>
        <Link to="/myPage">마이페이지</Link>
        <Link to="/myPage">키워드 관리</Link>

        <LoginConfirmButton message="로그아웃 하시겠습니까?">
          <div className="logout-btn">로그아웃</div>
        </LoginConfirmButton>
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
    text-align: center;
  }
`;
