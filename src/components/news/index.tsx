import PersonalizeNav from "./nav";
import TabListContainer from "./tabs/TabListContainer";
import MainContainer from './main/MainContainer';

const NewsContainer = () => {
  return (
    <>
      <PersonalizeNav />
      <TabListContainer></TabListContainer>
      <MainContainer />
    </>
  );
};

export default NewsContainer;

//1. 키워드 탭 리스트 데이터를 Redux에서 관리한다.
//이유: 키워드를 지우고 추가하고 할텐데 모든 상태에서 알아야함. and Props drillng이 심함.
//2. 클릭 시 조건부렌더링 구사
//3 여기서 필요한 데이터.
//  3.1 사용자 키워드 리스트
//  3.2 첫번째 탭이 누구인지 인덱스 기준으로 하면될듯
///4 filter 함수 or find함수로 일치하는 조건 렌더링
