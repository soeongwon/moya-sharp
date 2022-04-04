import styled from "@emotion/styled";
import Container from "../layout/Container";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { useAppDispatch } from "../../redux/hooks";
<<<<<<< HEAD
import ScrollNavTabs from "../News/SearchNavigation";
import searchKeyword from "../../assets/csvjson.json";
=======
import ScrollNavTabs from "../news/nav/ScrollNavTabs";
import { keywordList } from "../../utils/keywordList";

>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037
const EditContainer = () => {
  return (
    <Wrap>
      <ScrollNavTabs />
      <Container>
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
      </Container>
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
