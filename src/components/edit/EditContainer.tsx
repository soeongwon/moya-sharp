import styled from "@emotion/styled";
import { useState } from "react";
import Container from "../common/layout/Container";
import KeywordItem from "./KeywordItem";
import MykeyWordArea from "./MykeyWordArea";
import { category, sectorKey, startup } from "../../utils/master";
import { keywordList } from "../../utils/keywordList";
import { Master } from "../home/InstanseKeyword";

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
  const [keywordTitle, setKeywordTitle] = useState<Title>("Category");
  const keywordTitleList: Title[] = ["Category", "Sector", "Startup"];
  const [selectedKey, setSelectedKey] = useState<string>("A");

  const sectorKeys = Object.keys(sectorKey).sort();

  const selectSortKey = (key: any) => {
    setSelectedKey(key)
  };
  const setTitle = (title: Title) => {
    setKeywordTitle(title);
  };

  const fetchNewsApi = (searchObj: Master, keyType: string) => {
    console.log(searchObj, keyType);
    if (!searchObj.exchange) {
      searchNews(keyType, searchObj.paramValue);
    } else {
      searchNews(keyType, searchObj.paramValue, searchObj.exchange);
    }
  };

  return (


    <Wrap>
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
          {/* {searchKeyword.map((item, index) => (
            <div>{item.sub_name}</div>
          ))} */}
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
