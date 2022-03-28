import styled from "@emotion/styled";
import ListContainer from "./List/ListContainer";
import NavContainer from "./nav/NavContainer";
import OptionContainer from "./options/OptionContainer";

const NewsContainer = () => {
  return (
    <Wrap>
      <NavContainer />
      <OptionContainer />
      <ListContainer />
    </Wrap>
  );
};

export default NewsContainer;

const Wrap = styled.section`
  padding-top: 280px;
`;
