import styled from "@emotion/styled";
import Container from "../common/layout/Container";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { category, sectorKey, startup } from "../../utils/master";

type Props = {
  searchNews: (
    keyType: string,
    keyParam: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

type Title = "Category" | "Sector" | "Startup";

const EditContainer = ({ searchNews }: Props) => {
  
  const sectorKeys = Object.keys(sectorKey).sort();
  const sortkeys : any = {}

  const sectorKeywordList = sectorKeys.forEach(function(key) {sortkeys[key] = sectorKey[key]})

  console.log(category)
  console.log(startup)
  return (
    <Wrap>
      <Container>
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MykeyWordArea />
        <KeywordListWrap>
          {Object.keys(sortkeys).map((item, index) => (
            <KeywordList key={item}>
              <SubTitle>{item}</SubTitle>
              <KeywordArea>
                 { 
                   Object.keys(sortkeys).map((o,index) => sortkeys[o].map((o: any, index: number) => (
                     o.name[0] === item ? 
                     <KeywordItem names={o.name} key={index} /> : null
                   )))
                 }
                 {}
              </KeywordArea>
            </KeywordList>
          ))}
        </KeywordListWrap>
      </Container>
    </Wrap>
  );
};

export default EditContainer;

const Wrap = styled.main`
  padding-top: 59px;
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

// function addKeyword(item: string): any {
//   throw new Error("Function not implemented.");
// }
