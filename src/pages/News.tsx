// Personlized News Page

import styled from "@emotion/styled";
import NewsContainer from "../components/news";

const News = ({ history }: any) => {
  console.log(history, "news");
  return (
    <Main>
      <NewsContainer />
    </Main>
  );
};

export default News;

const Main = styled.main`
  min-height: 100vh;
`;
