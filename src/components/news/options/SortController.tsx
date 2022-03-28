import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useNewsSorts } from "../hooks/useNewsSorts";
import { useSearch } from "../../../hooks/useSearch";
import { useParams } from "react-router-dom";

const SortController = () => {
  // const { searchNews } = useSearch();
  // const { identifier } = useParams();
  const { handleOption, newsCurOption, isOpen, openDropDown, closeDropDown } =
    useNewsSorts();

  const options = [
    { name: "정렬순", status: "top" },
    { name: "최신순", status: "latest" },
    { name: "인기순", status: "popular" }
  ];

  interface DropDown {
    name: string;
    status: string;
  }

  return (
    <DropDownView>
      <CurrentOption role="button" onClick={(e: MouseEvent) => openDropDown()}>
        {newsCurOption}
        <i className="nav-bottom"></i>
      </CurrentOption>
      <OptionList>
        {isOpen &&
          options.map((option: DropDown, index) => (
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
    </DropDownView>
  );
};

export default SortController;

const DropDownView = styled.div`
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
