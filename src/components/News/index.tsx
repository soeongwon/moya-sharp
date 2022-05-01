import styled from "@emotion/styled";
import List from "./List";
import SearchNavigation from "./SearchNavigation";
import ListFiterOption from "./ListFilterOption";
const News = () => {
  return (
    <>
      <SearchNavigation />
      <ListFiterOption />
      <List />
    </>
  );
};

export default News;
