import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { SearchTitleType } from "../../api/newsListApi";
import { useSearch } from "./../../hooks/useSearch";
import searchKeyword from "../../assets/csvjson.json";
import { languageCode } from "../../utils/languageCode";
import { timeFilter } from "../../utils/timeFilter";
import { categories } from "../../utils/categories";

type Props = {
  openKeywordList: (arg: boolean) => void;
  setLanguageCode: (arg: string) => void;
  setTimeFilterCode: (arg: string) => void;
  setIdentifiersString: (arg: string) => void;
  setCategoriesCode: (arg: string) => void;
  searchNews: (searchTitle?: SearchTitleType, str?: string) => void;
};
export type FilterItemType = {
  label: string;
  defaultValue: string;
  list: string[];
};

type keyWordEntity = {
  name: string;
  sub_name: string;
  data_type: SearchTitleType;
  exchange: string;
};

const Search = ({
  openKeywordList,
  setLanguageCode,
  setTimeFilterCode,
  setIdentifiersString,
  setCategoriesCode,
  searchNews
}: Props) => {
  const [openIndex, setOpen] = useState<null | number>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [inputText, setInputText] = useState(" ");
  const [isOpenInstanseSearch, setIsOpenInstanseSearch] = useState(false);
  const [instanseKeyword, setInstanseKeyword] = useState<Array<keyWordEntity>>(
    []
  );
  const { isOpendKeywordList } = useSearch();
  const languageName = languageCode.map(obj => obj.name);

  const timeFilterName = timeFilter.map(obj => obj.name);

  const categoriesName = categories.map(obj => obj.name);

  const filterListArr: Array<FilterItemType> = [
    {
      label: "언론사",
      defaultValue: "ALL",
      list: categoriesName
    },
    {
      label: "발행일",
      defaultValue: "mth1",
      list: timeFilterName
    },
    {
      label: "언어",
      defaultValue: "영어",
      list: languageName
    },
    {
      label: "새로고침 속도",
      defaultValue: "10초",
      list: ["10초", "30초", "1분", "10분", "새로고침 없음"]
    }
  ];

  const openFilterList = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setOpen(index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  const setLanguage = (langName: string) => {
    const langItem = languageCode.find(item => item.name === langName);
    if (!langItem) {
      return;
    }
    setLanguageCode(langItem.code);
  };

  const setTimeFilter = (timeName: string) => {
    const timeFilterItem = timeFilter.find(item => item.name === timeName);
    if (!timeFilterItem) {
      return;
    }
    setTimeFilterCode(timeFilterItem.time_code);
  };

  const setCategories = (categorieName: string) => {
    const categoriesItem = categories.find(item => item.name === categorieName);
    if (!categoriesItem) {
      return;
    }
    setCategoriesCode(categoriesItem.code);
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    setIdentifiersString(inputText);
    if (e.code === "Enter") {
      e.preventDefault();
      searchNews();
    }
  };

  const changeInputText = (value: SetStateAction<string>) => {
    setInputText(value);
  };

  const instanseSearch = () => {
    if (inputText === " " || !inputText) {
      setInstanseKeyword([]);
      setIsOpenInstanseSearch(false);
      return;
    }
    //TODO: any 타입정의 다시해야함
    const sorted = searchKeyword.sort(
      (a: any, b: any) => a.name.charCodeAt() - b.name.charCodeAt()
    );
    const keyword: any = sorted.filter(item => item.name.includes(inputText));
    if (!keyword || keyword.length === 0) {
      setIsOpenInstanseSearch(false);
      return;
    }
    setIsOpenInstanseSearch(true);
    setInstanseKeyword(keyword);
  };

  const search = (item: keyWordEntity) => {
    searchNews(item.data_type, item.name);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  // const searchHighlight = (string: string) => {
  //   let regex = new RegExp(inputText, "g");
  //   string.replace(regex, "<span class='highlight'>" + inputText + "</span>");
  //   console.log(
  //     string.replace(regex, "<span class='highlight'>" + inputText + "</span>")
  //   );
  // };

  function closeKeywordList(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    openKeywordList(false);
  }

  return (
    <SearchArea>
      <div>
        <KeywordSearchButton>
          <Link to={"/edit"}>
            키워드 전체보기 <i className="icon-keyword"></i>
          </Link>
        </KeywordSearchButton>
      </div>
      <SearchWarp>
        <form>
          <SearchFilterSelectWrap>
            <Legend>뉴스 키워드 검색</Legend>
            {filterListArr.map((item, index) => (
              <SearchFilterItem
                key={item.label}
                filterItem={item}
                index={index}
                isOpen={openIndex === index}
                openFilterList={openFilterList}
                filterList={item.list}
                setLanguage={setLanguage}
                setTimeFilter={setTimeFilter}
                setCategories={setCategories}
              />
            ))}
            <SearchBox
              focused={focused}
              onFocus={() => {
                setFocused(true);
              }}
            >
              <input
                type="text"
                onFocus={() => {
                  openKeywordList(!isOpendKeywordList);
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeInputText(e.target.value)
                }
                onKeyUp={instanseSearch}
                onKeyDown={onEnterPress}
                placeholder="AAPL, MSFT, 005930, Gold, Oil, DJIA, Nikkei eg... "
              />
            </SearchBox>
            <KeywordListClose>
              <button onClick={closeKeywordList}>
                <i>키워드 리스트 버튼</i>
              </button>
            </KeywordListClose>
          </SearchFilterSelectWrap>
        </form>
      </SearchWarp>
      {isOpenInstanseSearch && (
        <InstanseSearchDropDown>
          <h3>Tickers</h3>
          {instanseKeyword.map(item => (
            <div key={item.name} onClick={() => search(item)}>
              {item.name}
              {item.sub_name}
            </div>
          ))}
        </InstanseSearchDropDown>
      )}
    </SearchArea>
  );
};

export default Search;
const KeywordListClose = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #c4c4c4;
  align-items: center;
  button {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    border: none;
    font-size: 0;
    background: none;
  }
  i {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("/images/main-keyword-list-arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }
`;

const InstanseSearchDropDown = styled.div`
  width: 555px;
  height: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  right: 0;
  background: #fff;
  position: absolute;
  overflow: scroll;
  border-radius: 5px;

  h3 {
    padding: 10px 23px;
    color: ${({ theme }) => theme.BlueGreenColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }

  div {
    padding: 11px 23px;
    cursor: pointer;
    color: #424242;
    &:hover {
      background: #f0fcfb;
    }
  }
  .highlight {
    font-weight: bold;
    color: #ff0000;
  }
`;

export const SearchArea = styled.section`
  position: relative;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: end;
  }
  z-index: 20;
`;

const KeywordSearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  a {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #48c0b7;
    text-decoration: none;
  }
  .icon-keyword {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 3px;
    background-repeat: no-repeat;
    background-image: url("/images/keyword-arrow.svg");
    background-size: contain;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #48c0b7;
  }
`;

const Legend = styled.legend`
  visibility: hidden;
  font-size: 0;
`;

const SearchFilterSelectWrap = styled.fieldset`
  display: flex;
`;

const SearchWarp = styled.div`
  box-sizing: border-box;
  width: 1240px;
  height: 120px;
  margin: 32px 0 0;
  padding: 26px 26px 24px 0;
  border-radius: 5px;
  /* border: 1px solid #f1f1f1; */
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
`;

type SearchBoxProps = {
  focused: boolean;
};

const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  align-items: center;
  width: 41%;
  background: ${({ focused }) =>
      focused ? "url(/images/search-focused.svg)" : "url(/images/search.svg)"}
    no-repeat 4.5%;
  transition: background 0.3s ease;
  input {
    height: 50px;
    font-size: 18px;
    margin-left: 50px;
    width: 100%;
    border: none;
    outline: none;
  }
`;