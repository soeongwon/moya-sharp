import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";
import { Menu } from "./Menu";
import { ChildProps } from "./../../../../types/Common";

interface Props {
  options: Array<object>;
  children?: ChildProps;
}
const AlignmentDropDown = ({ options }: Props) => {
  const [newsCurOption, setNewsCurOption] = useState<any>("정렬순");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOption = (option: string) => {
    setNewsCurOption(option);
  };
  const openDropDown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <DropDown>
      <CurrentOption role="button" onClick={(e: MouseEvent) => openDropDown()}>
        {newsCurOption}
        <i className="nav-bottom"></i>
      </CurrentOption>
      <Menu
        options={options}
        isOpen={isOpen}
        onOpen={setIsOpen}
        closeDropDown={closeDropDown}
        handleOption={handleOption}
      ></Menu>
    </DropDown>
  );
};

export default AlignmentDropDown;

const DropDown = styled.div`
  position: relative;
`;
const CurrentOption = styled.div`
  width: 160px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  margin-right: 20px;
  cursor: pointer;
  .nav-bottom {
    position: absolute;
    top: 20px;
    right: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  background-color: #fff;
  .dropdown-item {
    width: 160px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    cursor: pointer;
  }
  .sort-item {
    cursor: pointer;
  }
`;
