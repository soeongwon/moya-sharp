import styled from "@emotion/styled";
import useNeedLogin from "../components/login/hooks/useNeedLogin";
import News from "../components/News";

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
