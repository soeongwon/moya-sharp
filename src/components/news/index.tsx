import styled from "@emotion/styled";
import PostFilterView from "./List/PostFilterView";
import ScrollNavTabs from "./nav/ScrollNavTabs";
import Options from "./options";
const NewsContainer = () => {
  return (
    <ResponseView>
      <ScrollNavTabs />
      <Options />
      <PostFilterView />
    </ResponseView>
  );
};

export default NewsContainer;

const ResponseView = styled.section`
  padding-top: 280px;
`;
