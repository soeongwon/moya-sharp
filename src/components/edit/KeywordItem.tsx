import styled from "@emotion/styled";
import { ReactChild, ReactChildren } from "react";
import { useKeywordList } from "../../hooks/useKeywordList";
import { useAppDispatch } from "../../redux/hooks";
import { addKeyword } from "../../redux/keyword/keywordsSlice";

type Props = {
  // children: ReactChild | ReactChildren;
  item: string;
};

const KeywordItem = ({ item }: Props) => {
  const keywordList = useKeywordList();
  const dispatch = useAppDispatch();
  return (
    <KeyWordItemWrap
      onClick={() => {
        dispatch(addKeyword(item));
      }}
    >
      <KeywordText>{item}</KeywordText>
      <DeleteBtn>
        <img src="images/keyword-delete.svg" alt="삭제하기 버튼" />
      </DeleteBtn>
    </KeyWordItemWrap>
  );
};

export default KeywordItem;

const KeyWordItemWrap = styled.div`
  cursor: pointer;
  display: inline-block;
  max-width: 300px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  & + & {
    margin-left: 10px;
  }
`;

const KeywordText = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
`;
const DeleteBtn = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
