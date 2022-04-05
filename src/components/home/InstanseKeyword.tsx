import styled from "@emotion/styled";
import React from "react";

type Props = {
  keyword: Array<Master>;
};

export type Master = {
  exchange?: string;
  name: string;
  paramValue: string;
  key: string;
};

export const InstanseKeyword = ({ keyword }: Props) => {
  return (
    <InstanseSearchDropDown>
      {keyword.map((item: Master, index, arr) => {
        let el = [];
        if (index === 0 || arr[index - 1].key !== item.key) {
          console.log(item);
          el.push(<h3>{item.key}</h3>);
        }
        el.push(<div>{item.name}</div>);
        return el;
      })}
    </InstanseSearchDropDown>
  );
};

const InstanseSearchDropDown = styled.div`
  width: 555px;
  height: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  right: 0;
  background: #fff;
  position: absolute;
  overflow: scroll;
  border-radius: 5px;

  h3 {
    padding: 10px 23px;
    color: ${({ theme }) => theme.BlueGreenColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }

  div {
    padding: 11px 23px;
    cursor: pointer;
    color: #424242;
    &:hover {
      background: #f0fcfb;
    }
  }
  .highlight {
    font-weight: bold;
    color: #ff0000;
  }
`;
