import styled from "@emotion/styled";
import ScrollNavTabs from "./nav/ScrollNavTabs";
import MainContainer from './List/MainContainer';
const NewsContainer = () => {
  return (
    <ResponseView>
      {/* <PersonalizeNav /> */}
      <ResponsiveTag />
      <ScrollNavTabs/>
      {/* <TabListContainer></TabListContainer> */}
      <MainContainer />
    </ResponseView>
  );
};

export default NewsContainer;

const ResponseView = styled.section``;
const ResponsiveTag = styled.div`
  height: 340px;
`;
