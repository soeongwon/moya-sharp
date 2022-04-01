import styled from "@emotion/styled";
import List from "./List";
import NavContainer from "./lnb/NavContainer";
import ListFilterContainer from "./snb/ListFilterContainer";

const NewsContainer = () => {
  return (
    <Wrap>
      <NavContainer />
      <ListFilterContainer />
      <List />
    </Wrap>
  );
};

export default NewsContainer;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
