import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  categoryList: string[];
  selectSortKey: (arg: string) => void;
  selectedSectorList: string[];
  startupData: string[];
  categoryData: string[];
  setIdentifiersString: (arg: string) => void;
  searchNews: (str: string) => void;
};

type Title = "Category" | "Sector" | "Startup";

const KeywordSelect = ({
  categoryList,
  selectSortKey,
  selectedSectorList,
  startupData,
  categoryData,
  setIdentifiersString,
  searchNews
}: Props) => {
  const [keywordTitle, setKeywordTitle] = useState<Title>("Sector");

  const keywordTitleList: Title[] = ["Category", "Sector", "Startup"];

  const setTitle = (title: Title) => {
    setKeywordTitle(title);
  };

  const fetchNewsApi = (identifier: string) => {
    searchNews(identifier);
  };

  return (
    <KeywordSelectWrap>
      <KeywordSelectTitles>
        {keywordTitleList.map(item => (
          <KeywordTitleItem
            key={item}
            onClick={() => setTitle(item)}
            selected={item === keywordTitle}
          >
            {item}
          </KeywordTitleItem>
        ))}
      </KeywordSelectTitles>
      {keywordTitle === "Sector" && (
        <KeywordListContainer>
          <CategoryList>
            <ul>
              {categoryList.map(sortKeyItem => (
                <CategoryListItem
                  key={`Sector-${sortKeyItem}`}
                  onClick={() => selectSortKey(sortKeyItem)}
                >
                  <span>{sortKeyItem}</span>
                  <img
                    src="/images/keyword-arrow.svg"
                    alt="섹터 탭 키워드 정렬 화살표"
                  />
                </CategoryListItem>
              ))}
            </ul>
          </CategoryList>
          <KeywordListWrap>
            {selectedSectorList.map(item => (
              <KeywordListItem
                key={item}
                onClick={() => {
                  fetchNewsApi(item);
                }}
              >
                {item}
              </KeywordListItem>
            ))}
          </KeywordListWrap>
        </KeywordListContainer>
      )}
      {keywordTitle === "Startup" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {startupData.map(item => (
                <li
                  key={`Startup-${item}`}
                  onClick={() => {
                    fetchNewsApi(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}
      {keywordTitle === "Category" && (
        <KeywordListContainer>
          <StartupKeywordList>
            <ul>
              {categoryData.map(item => (
                <li
                  key={`Category-${item}`}
                  onClick={() => {
                    fetchNewsApi(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </StartupKeywordList>
        </KeywordListContainer>
      )}
    </KeywordSelectWrap>
  );
};

export default KeywordSelect;

const StartupKeywordList = styled.div`
  overflow-y: scroll;
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 10px;
    border-top: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    grid-gap: 0;

    li {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #c4c4c4;
      border-bottom: 1px solid #c4c4c4;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const KeywordSelectWrap = styled.div`
  margin-top: 14px;
  background: #fff;
  border-radius: 0px 0px 5px 5px;
`;

const KeywordSelectTitles = styled.div`
  height: 59px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #c4c4c4;
`;

type KeywordTitleItemType = {
  selected: boolean;
};

const KeywordTitleItem = styled.strong<KeywordTitleItemType>`
  display: block;
  width: 329px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.BlueGreenColor : "#787878"};
  border-bottom: ${({ selected, theme }) =>
    selected ? `4px solid ${theme.BlueGreenColor}` : null};
  transition: all 0.2s ease;
`;

const KeywordListContainer = styled.div`
  width: 100%;
  height: 525px;
  background: #fff;
  display: flex;
`;

const CategoryList = styled.div`
  width: 324px;
  overflow-y: scroll;
  ul {
    margin-left: 10px;
  }
`;
const CategoryListItem = styled.li`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: #4f4f4f;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  transition: all 0.2s ease;
  img {
    padding-bottom: 3px;
    display: none;
  }
  &:hover {
    background: #f0fcfb;
  }
  &:hover img {
    display: block;
  }
`;
const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(1n),
  & > p:nth-of-type(2n) {
    border-right: 1px solid #c4c4c4;
  }

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
`;

const KeywordListItem = styled.p`
  display: flex;
  height: 37px;
  padding-left: 20px;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #4f4f4f;
  cursor: pointer;
`;
