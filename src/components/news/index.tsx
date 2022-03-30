import styled from "@emotion/styled";
import ListContainer from "./List/ListContainer";
import NavContainer from "./lnb/NavContainer";
import ListFilterContainer from "./snb/ListFilterContainer";

const NewsContainer = () => {
  return (
    <Wrap>
      <NavContainer />
      <ListFilterContainer />
      <ListContainer />
    </Wrap>
  );
};

export default NewsContainer;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
