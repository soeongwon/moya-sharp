import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import { SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useFetchLanguageCode } from "../../hooks/useFetchLanguageCode";
import { useTimeFilter } from "../../hooks/useTimeFilter";
import { useCategories } from "../../hooks/useCategories";
import { SearchTitleType } from "../../api/newsListApi";
import { useSearch } from "./../../hooks/useSearch";
import searchKeyword from "../../assets/csvjson.json";

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
  const languageCode = useFetchLanguageCode();
  const languageName = languageCode.languages.map(obj => obj.name);

  const timeFilterArr = useTimeFilter();
  const timeFilterName = timeFilterArr.map(obj => obj.name);

  const categoriesArr = useCategories();
  const categoriesName = categoriesArr.map(obj => obj.name);

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
    const langItem = languageCode.languages.find(
      item => item.name === langName
    );
    if (!langItem) {
      return;
    }
    setLanguageCode(langItem.code);
  };

  const setTimeFilter = (timeName: string) => {
    const timeFilterItem = timeFilterArr.find(item => item.name === timeName);
    if (!timeFilterItem) {
      return;
    }
    setTimeFilterCode(timeFilterItem.time_code);
  };

  const setCategories = (categorieName: string) => {
    const categoriesItem = categoriesArr.find(
      item => item.name === categorieName
    );
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
    const keyword: any = searchKeyword.filter(item =>
      item.name.includes(inputText)
    );
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

  return (
    <SearchArea>
      <div>
        <KeywordSearchButton>
          키워드 전체보기
          <i className="icon-keyword"></i>
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
          </SearchFilterSelectWrap>
        </form>
      </SearchWarp>
      {isOpenInstanseSearch && (
        <InstanseSearchDropDown>
          <h3>Tickers</h3>
          {instanseKeyword.map(item => (
            <div key={item.name} onClick={() => search(item)}>
              {item.name}
            </div>
          ))}
        </InstanseSearchDropDown>
      )}
    </SearchArea>
  );
};

export default Search;

const InstanseSearchDropDown = styled.div`
  width: 519px;
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
`;

export const SearchArea = styled.div`
  position: relative;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: end;
  }
`;

const KeywordSearchButton = styled.button`
  border: none;
  background: none;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #48c0b7;
  cursor: pointer;

  .icon-keyword {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 7px;
    background-repeat: no-repeat;
    background-image: url("images/keyword-arrow.svg");
    background-size: contain;
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
  padding: 26px 76.1px 24px 0;
  border-radius: 5px;
  border: solid 1px #f1f1f1;
  background-color: #fff;
`;

type SearchBoxProps = {
  focused: boolean;
};

const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  align-items: center;
  width: 506px;
  background: ${({ focused }) =>
      focused ? "url(images/search-focused.svg)" : "url(images/search.svg)"}
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
