import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { useKeywordList } from "../../hooks/useKeywordList";
import { useAppDispatch } from "../../redux/hooks";

const EditContainer = () => {
  const keywordList = useKeywordList();
  return (
    <Wrap>
      <CommonContainer>
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MykeyWordArea />
        <KeywordListWrap>
          {keywordList.map(item => (
            <KeywordList>
              <SubTitle>{item.title}</SubTitle>
              {item.data.map(item => (
                <KeywordItem item={item} />
              ))}
            </KeywordList>
          ))}
        </KeywordListWrap>
      </CommonContainer>
    </Wrap>
  );
};

export default EditContainer;

const Wrap = styled.main`
  margin-top: 60px;
`;
const KeywordList = styled.div`
  margin-bottom: 50px;
`;
const KeywordListWrap = styled.div``;

export const KeyWordTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;

const SubTitle = styled.h4`
  margin: 20px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}
