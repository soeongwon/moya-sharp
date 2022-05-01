import styled from "@emotion/styled";
import Container from "../common/layout/Container";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { sectors } from "../../utils/master";
import { divideSectorKey } from "../../utils/divideSectorKey";

const EditContainer = () => {
  const sectorKeys = Object.keys(sortedSector).sort();
  const sortkeys: any = {};

  return (
    <Wrap>
      <Container>
        <KeyWordTitle>My Keyword</KeyWordTitle>
        <MykeyWordArea />
        <KeywordListWrap>
          {Object.keys(sortkeys).map((item, index) => (
            <KeywordList key={index}>
              <SubTitle>{item}</SubTitle>
              <KeywordArea>
                {Object.keys(sortkeys).map(item =>
                  sortkeys[item].map((items: any, index2: number) =>
                    items.name[0] === sectorKeys[index] ? (
                      <KeywordItem names={items.name} key={index2} />
                    ) : null
                  )
                )}
              </KeywordArea>
            </KeywordList>
          ))}
        </KeywordListWrap>
      </Container>
    </Wrap>
  );
};

export default EditContainer;

const sortedSector = divideSectorKey(sectors);

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
