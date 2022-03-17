import styled from "@emotion/styled";
import React, { useState } from "react";
import { MouseEvent } from "react";
import { useNewsFilter } from "./../../hooks/useNewsFilter";
import { useNewsSorts } from "./../../hooks/useNewsSorts";

const options: string[] = ["정렬순", "최신순", "인기순"];

interface Props {
  newsCurOption: String;
  setNewsCurOption: React.Dispatch<React.SetStateAction<String>>;
}

const SortOptionList = () => {
  const { reportOptionToAPI } = useNewsFilter();
  const { showDropDown, newsCurOption, isActive, setIsActive } = useNewsSorts();
  return (
    <ListWrap>
      <DropDownBtn onClick={(e: MouseEvent) => setIsActive(!isActive)}>
        {newsCurOption}
        <i className="nav-bottom"></i>
      </DropDownBtn>
      <DropDownList>
        {isActive &&
          options.map(option => (
            <li
              className="dropdown-item"
              onClick={(e: MouseEvent) => {
                showDropDown(option);
                reportOptionToAPI(option);
              }}
            >
              {option}
            </li>
          ))}
      </DropDownList>
    </ListWrap>
  );
};

export default SortOptionList;

const ListWrap = styled.div`
  position: relative;
`;
const DropDownBtn = styled.div`
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
    background-image: url("images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
const DropDownList = styled.ul`
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
  }
  .sort-item {
    cursor: pointer;
  }
`;
