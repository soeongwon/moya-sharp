import styled from "@emotion/styled";
import List from "./List";
import NavContainer from "./lnb/NavContainer";
import ListFilterContainer from "./snb/ListFilterContainer";

const NewsContainer = () => {
  return (
    <>
      <NavContainer />
      <ListFilterContainer />
      <List />
    </>
  );
};

export default NewsContainer;
