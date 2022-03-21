import React from "react";
import styled from "@emotion/styled";

const MyKeyword = () => {
  return (
    <KeywordsWarp>
      <h3>마이키워드</h3>
      <Keywords className="on">accelerators</Keywords>
      <Keywords>Social Media Marketing & Advertising</Keywords>
    </KeywordsWarp>
  )
}

export default MyKeyword;

const KeywordsWarp = styled.div`
  margin-top: 40px;  
  .on {
    background-color: rgba(72, 192, 183, 0.04);
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }
`

const Keywords = styled.button`
  display: inline-block;
  padding: 12px 40px 16px;
  border: solid 1px #48c0b7;
  background-color: #fff;
  border-radius: 5px;
  color: #3b788b;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 20px;
  cursor: pointer;
`