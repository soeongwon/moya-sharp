import KeywordSelect from "../../components/home/KeywordSelect";
import { MasterObj } from "../../utils/master";

type Props = {
  master: MasterObj | undefined;
  searchNews: (
    keyType: string,
    paramValue: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

const KeywordSelectContainer = ({ searchNews, master }: Props) => {
  return <KeywordSelect searchNews={searchNews} />;
};

export default KeywordSelectContainer;
