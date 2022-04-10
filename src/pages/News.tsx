import styled from "@emotion/styled";
import News from "../components/News";
import useNeedLogin from "../hooks/useNeedLogin";

const NewsPage = ({ history }: any) => {
  useNeedLogin();
  return (
    <Main>
      <News />
    </Main>
  );
};

export default NewsPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
