import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import  BookmarkNav  from "./BookmarkNav";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination"


interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline,
  __v: number;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

const Bookmark = () => {
  const [page, setPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [items, setItems] = useState<Array<Passenger>>([])

  const handlePageChange = (crrentPage: number): void => {
    setPage(crrentPage)
  }

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 6 }
      const { data: { totalPages, data }} = await axios.get<Response>("https://api.instantwebtools.net/v1/passenger", { params });

      setTotalPages(totalPages)
      setItems(data)
    }
    fetch()
  }, [page]);

  return (
  <Wrap>
    <Container>
      <SideBar>
        <h2>스크랩한 뉴스</h2>
        <SideContainer>
          <BookmarkNav/>
        </SideContainer>
      </SideBar>
      <Content>
        <ContContainer>
          <FilterList>
            <select name="filter">
              <option value="none">정렬순</option>
              <option value="최신순">최신순</option>
              <option value="인기순">인기순</option>
            </select>
          </FilterList>
          <BookmarkList>
            {items.map((item) => (
              <li>
                <h2>{item.name}</h2>
                <LogoPress></LogoPress>
                <PressName>{item.name}</PressName>
                <Wtime>3 minutes ago</Wtime>
                <Link to={"/"}>
                <MoreIcon><img src="../images/More.svg" alt="more icon" /></MoreIcon>
              </Link>
              </li>
            ))}
          </BookmarkList>

          <PageNationItems>
            <span>pages {page + 1} of {totalPages}</span>
            <Pagination count={totalPages} page={page} onPageChange={handlePageChange} />
          </PageNationItems>
        </ContContainer>
      </Content>
    </Container>
  </Wrap>
  );
}

export default Bookmark;

const Wrap = styled.div`
  background-color: #f9faff;
  height: 120vh;
`;

const Container = styled.div`
  width: 1240px;
  height: 740px;
  margin: 0 auto;
  display: flex;
`

const SideContainer = styled.div`
  background-color: #144056;
  text-align: center;
  border-radius: 5px;
`

const ContContainer = styled.div`
  margin-left: 50px;
  margin-top: 55px;
`
const SideBar = styled.div`
  float: left;
  h2 {
    margin-top: 85px;
    font-size: 22px;
    font-weight: 600;
    color: #144056;
  }
`
const Content = styled.div`
  background-color: #f9faff;
  height: 1050px;
  width: 1315px;
  float: left;
`
const FilterList = styled.div`
  margin-left: 765px;
  select {
    padding-left: 10px;
    width: 160px;
    height: 40px;
    border: 1px solid #DADADA; 
    border-radius : 3px;
  }

  
`
const BookmarkList = styled.ul`
  margin-top: 52px;
  li {
    position: relative;
    padding: 14px 0 6px 25px;
    font-weight: 300;
    font-size: 14px;
    width: 925px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
    color: #1D1D1D;
    margin-bottom: 11px;
  }
  li + li {
    margin-top: 20px;
  }
  li > div {
    display: inline-block;
  }
  a {
    position: absolute;
    top: 28px;
    right: 49px;
  }
`
const LogoPress = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #B2B2B2;
  margin-bottom: -4px;
`
const PressName = styled.div`
  margin-left: 4px;
  height: 24px;
  line-height: 12px;
`

const Wtime = styled.div`
  margin-left: 30px;
  height: 24px;
  line-height: 12px;
`

const PageNationItems = styled.div`
  display: flex;
  span {
    font-weight: 300;
    font-size: 14px;
    color: #90A4AE;
    line-height: 30px;
    margin-top: 81px;
  }
`
const MoreIcon = styled.div`
  width: 16px;
  height: 4px;
`
