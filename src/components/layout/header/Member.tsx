import styled from "@emotion/styled";
import { MouseEvent } from "react";
import HeaderModal from "./HeaderModal";
import { useRef, useState, useEffect } from "react";

const Member = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function hanldeModal(event: MouseEvent<HTMLElement>) {
    setIsOpen(!isOpen);
  }

  const area = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (area.current && !area.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Wrap ref={area}>
      <span className="MemberShip-join">지금 멤버십 가입</span>
      <Profile>
        <i className="profile-icon"></i>
        <span className="user-name">회원님</span>
        <i
          role="button"
          onClick={hanldeModal}
          className="icon-arrow-bottom"
        ></i>
        {isOpen === true ? <HeaderModal /> : null}
      </Profile>
    </Wrap>
  );
};
export default Member;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  color: #575757;
  .MemberShip-join {
    font-size: 14px;
    margin-right: 22px;
    cursor: pointer;
    color: #575757;
  }
  & > span {
    flex-grow: 0;
    font-size: 12px;
    padding: 6px 8px 7px 7px;
    border-radius: 5px;
    border: 1px solid #b5b5b5;
    background-color: #fff;
    color: #575757;
  }
  .user-name {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #575757;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 12px;
  .profile-icon {
    width: 24px;
    height: 24px;
    background-image: url("https://placeimg.com/24/24/any");
    background-size: cover;
    margin-right: 12px;
    margin-top: 2px;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon-arrow-bottom {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    cursor: pointer;
  }
`;
