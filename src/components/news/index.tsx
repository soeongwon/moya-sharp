import styled from "@emotion/styled";
import ListContainer from "./List/ListContainer";
import NavContainer from "./nav/NavContainer";
import OptionContainer from "./options/OptionContainer";

const NewsContainer = () => {
  return (
    <Wrap>
      <NavContainer />
      <Body>
        <OptionContainer />
        <ListContainer />
      </Body>
    </Wrap>
  );
};

export default NewsContainer;

const Wrap = styled.section``;

const Body = styled.div`
  padding-top: 400px;
`;
