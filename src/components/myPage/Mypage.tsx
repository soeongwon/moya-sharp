import styled from "@emotion/styled";
import  User  from "./User" 
import  SideNav  from "./SideNav" 
import  MembershipCard  from "./MembershipCard"  
import  PaymentsCard  from "./PaymentsCard"  
import MyKeyword  from "./MyKeyword"  

const MyPage = () => {
  return (
  <Wrap>
    <Container>
      <SideBar>
        <h2>마이페이지</h2>
        <SideContainer>
          <User/>
          <SideNav/>
        </SideContainer>
      </SideBar>
      <Content>
        <ContContainer>
          <ContTop>
            <MembershipCard/>
            <PaymentsCard/>
          </ContTop>
          <MyKeyword/>
        </ContContainer>
      </Content>
    </Container>
  </Wrap>
  );
}

export default MyPage;

const Wrap = styled.div`
  background-color: #f9faff;
`;

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
`
const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 81px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 135px;
  
`

const ContTop = styled.div`
  display: flex;
`
const SideBar = styled.div`
  width: 265px;
  margin-top: 85px;
  float: left;
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #144056;
    margin-bottom: 20px;
  }
`
const Content = styled.div`
  background-color: #f9faff;
  width: 975px;
  float: left;
`