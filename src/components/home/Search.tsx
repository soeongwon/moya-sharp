import styled from "@emotion/styled";
import { SearchFilterItem } from "./SearchFilterItem";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { languageCode } from "../../utils/languageCode";
import { timeFilter } from "../../utils/timeFilter";
import { categories } from "../../utils/categories";
import { seachInstanceSearch } from "../../utils/seachInstanceSearch";
import { master } from "../../utils/master";
import { InstanseKeyword, Master } from "./InstanseKeyword";

type Props = {
  setIsOpendKeywordList: (arg: boolean) => void;
  isOpendKeywordList: boolean;
  setLanguageCode: (arg: string) => void;
  setTimeFilterCode: (arg: string) => void;
  setMediaTypeCode: (arg: string) => void;
  searchNews: (
    keyType: string,
    paramValue: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

export type FilterItemType = {
  label: string;
  defaultValue: string;
  list: string[];
};

const Search = ({
  setIsOpendKeywordList,
  isOpendKeywordList,
  setLanguageCode,
  setTimeFilterCode,
  setMediaTypeCode,
  searchNews
}: Props) => {
  const [openIndex, setOpen] = useState<null | number>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [inputText, setInputText] = useState(" ");
  const [isOpenInstanseSearch, setIsOpenInstanseSearch] = useState(false);
  const [instanseKeyword, setInstanseKeyword] = useState<Array<Master>>([]);

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
    setMediaTypeCode(categoriesItem.code);
  };

  const changeInputText = (value: SetStateAction<string>) => {
    setInputText(value);
  };

  const instanseSearch = () => {
    if (inputText === " " || !inputText) {
      setIsOpenInstanseSearch(false);
      return;
    }
    let filterObj: Array<Master> = seachInstanceSearch(master, inputText);

    setInstanseKeyword(filterObj);
    setIsOpenInstanseSearch(true);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  function closeKeywordList(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsOpendKeywordList(false);
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
                  setIsOpendKeywordList(!isOpendKeywordList);
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeInputText(e.target.value)
                }
                onKeyUp={instanseSearch}
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
      {isOpenInstanseSearch && <InstanseKeyword keyword={instanseKeyword} />}
    </SearchArea>
  );
};

export default Search;

const KeywordListClose = styled.div`
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

export const SearchArea = styled.div`
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
