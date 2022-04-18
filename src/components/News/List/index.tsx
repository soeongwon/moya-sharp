import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
import { StringParam, useQueryParams } from "use-query-params";
import { useEffect } from "react";
import { initAction, fetchNewList } from "../../../redux/news/newsListSlice";
import Container from "../../common/layout/Container";
import ImageArticleList from "./ImageArticleList";
import TextArticleList from "./TextArticleList";
import Spinner from "../common/Spinner";
import Observer from "./Observer";

const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.newsList
  );
  const dispatch = useAppDispatch();
  const [query] = useQueryParams({
    orderBy: StringParam,
    keyType: StringParam,
    paramValue: StringParam,
    language: StringParam,
    timeFilter: StringParam,
    mediaType: StringParam,
    exchange: StringParam
  });

  useEffect(() => {
    dispatch(fetchNewList({ ...query }));
    return () => {
      dispatch(initAction());
    };
  }, [dispatch, query]);

  return (
    <Wrap>
      <Container>
        {NewsFormats === "Image" && <ImageArticleList newListData={data} />}
        {NewsFormats === "Text" && <TextArticleList newListData={data} />}
      </Container>
      <Spinner loading={loading}></Spinner>
      <Observer
        options={{
          threshold: 0.3,
          rootMargin: "0px 0px 100px 0px",
          trackVisibility: true,
          delay: 2000,
          skip: error ? true : false
        }}
        query={query}
      />
    </Wrap>
  );
};

export default List;
const Wrap = styled.section``;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
