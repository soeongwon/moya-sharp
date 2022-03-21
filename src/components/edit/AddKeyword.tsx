import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import KeywordItem from "./KeywordItem";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { SetStateAction, useState } from "react";
import { SearchTitleType } from "../../api/newsListApi";
import searchKeyword from "../../assets/csvjson.json";
import { useSearch } from "../../hooks/useSearch";
import { useKeywordList } from "../../hooks/useKeywordList";

const AddKeyword = () => {
  const keywordList = useKeywordList();
  const myKeywords = useAppSelector((state: RootState) => state.keywords);

  return (
    <Wrap>
      <CommonContainer>
        <KeyWordSearch>
          <input type="text" placeholder="키워드 검색 " />
        </KeyWordSearch>
        <KeywordLine />
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MyKeywordInner>
          {myKeywords.map(item => (
            <KeywordItem key={`mykeyword-${item.data}`} item={item.data} />
          ))}
        </MyKeywordInner>
      </CommonContainer>
    </Wrap>
  );
};

export default AddKeyword;

const Wrap = styled.div`
  margin-top: 16px;
`;

const KeyWordSearch = styled.div`
  input::placeholder {
    color: #48c0b7;
  }
  input::-webkit-input-placeholder {
    color: #48c0b7;
  }
  input:-ms-input-placeholder {
    color: #48c0b7;
  }

  textarea::placeholder {
    color: #48c0b7;
  }
  textarea::-webkit-input-placeholder {
    color: #48c0b7;
  }
  textarea:-ms-input-placeholder {
    color: #48c0b7;
  }
  padding-bottom: 16px;
  input {
    border: 1px solid #48c0b7;
    width: 500px;
    margin-right: 24px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #48c0b7;
    padding: 11px 0 10px 16px;
    background-color: rgba(72, 192, 183, 0.05);
  }
  input:focus {
    outline: none;
  }
`;

const KeywordLine = styled.div`
  width: 516px;
  border-bottom: 1px solid #c4c4c4;
`;

export const KeyWordTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #48c0b7;
  margin-top: 3px;
`;

const MyKeywordInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 20px;
  padding-top: 16px;
`;
function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}
