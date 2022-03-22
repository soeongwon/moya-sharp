import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useNewsSorts } from "../hooks/useNewsSorts";
import { useSearch } from "../../../hooks/useSearch";
import { useParams } from "react-router-dom";

const SortOptionList = () => {
  const { showDropDown, newsCurOption, isActive, setIsActive } = useNewsSorts();
  const { searchNews } = useSearch();
  const { identifier } = useParams();

  const options = [
    {
      name: "정렬순",
      status: "top"
    },
    { name: "최신순", status: "latest" },
    { name: "인기순", status: "popular" }
  ];

  interface DropDown {
    name: string;
    status: string;
  }

  return (
    <ListWrap>
      <DropDownBtn onClick={(e: MouseEvent) => setIsActive(!isActive)}>
        {newsCurOption}
        <i className="nav-bottom"></i>
      </DropDownBtn>
      <DropDownList>
        {isActive &&
          options.map((option: DropDown, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={(e: MouseEvent) => {
                showDropDown(option.name);
              }}
            >
              {option.name}
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
    background-image: url("/images/icon-navi-bottom.svg");
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
    cursor: pointer;
  }
  .sort-item {
    cursor: pointer;
  }
`;
