import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SearchTitleType } from "../../api/newsListApi";
import sector from "../../assets/sector.json";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchNewList } from "../../redux/news/newsListSlice";

type Props = {
  startupData: string[];
  categoryData: string[];
  searchNews: (searchTitle?: SearchTitleType, str?: string) => void;
};

type sectorKeywordType = {
  [data: string]: string[];
};

type Title = "Category" | "Sector" | "Startup";

const KeywordSelect = ({ startupData, categoryData, searchNews }: Props) => {
  const dispatch = useAppDispatch();
  const [keywordTitle, setKeywordTitle] = useState<Title>("Category");
  const [sectorKeyword] = useState<sectorKeywordType>(sector);

  const keywordTitleList: Title[] = ["Category", "Sector", "Startup"];
  const [selectedKey, setSelectedKey] = useState<string>("A");

  const categoryList = Object.keys(sectorKeyword);
  const setTitle = (title: Title) => {
    setKeywordTitle(title);
  };

  const fetchNewsApi = (identifier: string, keyType: string) => {
    dispatch(fetchNewList({ identifier, keyType }));
  };

  const selectSortKey = (key: string) => {
    setSelectedKey(key);
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
            {sectorKeyword[selectedKey].map((item, index) => (
              <KeywordListItem
                key={`Sector-${item}-${index}`}
                onClick={() => {
                  fetchNewsApi(item, "sectors");
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
                    fetchNewsApi(item, "startup");
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
                    fetchNewsApi(item, "category");
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
    grid-gap: 0;

    li {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
    }
    & > li:nth-of-type(12n + 1),
    & > li:nth-of-type(12n + 2),
    & > li:nth-of-type(12n + 3),
    & > li:nth-of-type(12n + 4),
    & > li:nth-of-type(12n + 5),
    & > li:nth-of-type(12n + 6) {
      background-color: #fbfbfb;
    }
    li:hover {
      background: #f0fcfb;
    }
  }
`;

const KeywordSelectWrap = styled.div`
  position: relative;
  z-index: 3;
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
  height: 450px;
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

export const KeywordListWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  overflow-y: scroll;

  & > p:nth-of-type(3n) {
    border: none;
  }

  & > p:nth-of-type(6n + 1),
  & > p:nth-of-type(6n + 2),
  & > p:nth-of-type(6n + 3) {
    background-color: #fbfbfb;
  }
  & > p:hover {
    background: #f0fcfb;
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
function addKeyword(item: string): any {
  throw new Error("Function not implemented.");
}
