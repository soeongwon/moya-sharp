import styled from "@emotion/styled";
import HomeContainer from "../containers/home/HomeContainer";

const Home = () => {
  return (
    <HomeWrap>
      <BackgroundImage>
        <InnerWrap>
          <HomeContainer />
        </InnerWrap>
      </BackgroundImage>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  background: linear-gradient(
    211.86deg,
    #ffffff -2.13%,
    rgba(244, 253, 251, 0.896614) 19.27%,
    rgba(223, 248, 244, 0.7) 49.34%,
    rgba(253, 221, 210, 0.7) 94.11%
  );
  min-height: 100vh;
  padding-bottom: 267px;
`;

const BackgroundImage = styled.div`
  background-image: url("/images/image_main.svg");
  background-position: 82% 285px;
  background-repeat: no-repeat;
`;

const InnerWrap = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding-top: 132px;
`;
