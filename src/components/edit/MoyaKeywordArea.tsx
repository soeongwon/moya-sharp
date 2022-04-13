import styled from "@emotion/styled";
import { useSearch } from "../../hooks/useSearch";

type Props = {
  keyword: Array<Master>;
};

export type Master = {
  exchange?: string;
  name: string;
  paramValue: string;
  key: string;
};

const MoyaKeywordArea = ({ keyword }: Props) => {
  const { searchNews } = useSearch();

  const keywords = (item: Master) => {
    const keyType = item.key
    const keyParm = item.paramValue
    const exchane = item.exchange? item.exchange : null

    
  } 

  return <Wrap></Wrap>;
};

export default MoyaKeywordArea;

const Wrap = styled.section``;
