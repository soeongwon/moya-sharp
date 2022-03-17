import React from "react";
import styled from "@emotion/styled";


const User = () => {
  return (
    <Usercard>
      <Profic></Profic>
      <h4>kim hana</h4>
      <p>kimhana1234@gamil.com</p>
      <EditBtn>프로필 편집</EditBtn>
      <BottomLine/>
    </Usercard>
  )
}

export default User;

const Usercard = styled.div`
  margin-bottom: 36px;
  padding-top: 43px;
  padding-left: 30px;
  padding-right: 32px;
  color: rgba(255, 255, 255, 0.6);
  ;
`


const Profic = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background-color: #fff;
  display: block;
  margin-top: 75px;
  margin-left: 8px;
  margin-bottom: 28px;
`
const EditBtn = styled.div`
  width: 118px;
  height: 37px;
  border-radius: 5px;
  border: solid 1px #48c0b7;
  color: #48c0b7;
  text-align: center;
  line-height: 2.3;
  margin-left: 43px;
  margin-bottom: 36px;
`
const BottomLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`

