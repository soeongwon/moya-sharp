import styled from "@emotion/styled";
import CommonContainer from "../layout/CommonContainer";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { useKeywordList } from "../../hooks/useKeywordList";
import { useAppDispatch } from "../../redux/hooks";
import ScrollNavTabs from "../news/nav/NavContainer";
import searchKeyword from "../../assets/csvjson.json";
const EditContainer = () => {
  const keywordList = useKeywordList();

  return (
    <Wrap>
      <ScrollNavTabs />
      <CommonContainer>
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MykeyWordArea />
        <KeywordListWrap>
          {keywordList.map((item, index) => (
            <KeywordList key={index}>
              <SubTitle>{item.title}</SubTitle>
              <KeywordArea>
                {item.data.map((item, index) => (
                  <KeywordItem item={item} key={`mykeyword-${item}-${index}`} />
                ))}
              </KeywordArea>
            </KeywordList>
          ))}
          {searchKeyword.map((item, index) => (
            <div>{item.sub_name}</div>
          ))}
        </KeywordListWrap>
      </CommonContainer>
    </Wrap>
  );
};

export default EditContainer;

const Wrap = styled.main`
  padding-top: 500px;
  min-height: 100vh;
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

const KeywordArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}
