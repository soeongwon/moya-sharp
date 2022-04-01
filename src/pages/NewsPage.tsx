// Personlized News Page

import styled from "@emotion/styled";
import NewsContainer from "../components/news";

const NewsPage = ({ history }: any) => {
  console.log(history, "news");
  return (
    <Main>
      <NewsContainer />
    </Main>
  );
};

export default NewsPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
