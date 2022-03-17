import KeywordSelect from "../../components/home/KeywordSelect";
import startup from "../../assets/startup.json";
import category from "../../assets/category.json";
import { SearchTitleType } from "../../api/newsListApi";

type Props = {
  searchNews: (searchTitle?: SearchTitleType, str?: string) => void;
};

const KeywordSelectContainer = ({ searchNews }: Props) => {
  return (
    <KeywordSelect
      startupData={startup.startup}
      categoryData={category.category}
      searchNews={searchNews}
    />
  );
};

export default KeywordSelectContainer;
