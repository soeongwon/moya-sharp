import styled from "@emotion/styled";
import { ChildProps } from "./../../../../types/Common";
import { useEffect, useState, MouseEvent, Key } from "react";
interface Props {
  options: string[];
}
interface DropDown {
  name: string;
  status: string;
}
export const Menu = ({ options,isOpen,onOpen,closeDropDown,handleOption }: any) => {
  return (
    <OptionList>
      {isOpen &&
        options.map((option: DropDown, index: Key | null | undefined) => (
          <li
            className="dropdown-item"
            key={index}
            onClick={(e: MouseEvent) => {
              handleOption(option.name);
              closeDropDown();
            }}
          >
            {option.name}
          </li>
        ))}
    </OptionList>
  );
};

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
