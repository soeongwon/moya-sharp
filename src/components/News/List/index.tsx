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
import ObserverView from "./ObserverView";
import Spinner from "../common/Spinner";
const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading, nextPageToken, error } = useAppSelector(
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
  const { keyType, orderBy } = query;

  useEffect(() => {
    dispatch(fetchNewList({ ...query }));
    return () => {
      console.log("destroyed");
      dispatch(initAction());
    };
  }, [dispatch, query]);

  return (
    <>
      <Wrap>
        <Container>
          <>
            {NewsFormats === "Image" && data.length > 1 && (
              <ImageArticleList newListData={data} />
            )}
            {NewsFormats === "Text" && data.length > 1 && (
              <TextArticleList newListData={data} />
            )}
          </>
          {loading && (
            <LoadingSpinnerWrap>
              <Spinner></Spinner>
            </LoadingSpinnerWrap>
          )}
        </Container>
      </Wrap>
      {loading === false && nextPageToken && (
        <ObserverView
          options={{
            threshold: 0.3,
            rootMargin: "0px 0px 100px 0px",
            trackVisibility: true,
            delay: 2000,
            skip: error ? true : false
          }}
          query={query}
        />
      )}
    </>
  );
};

export default List;
const Wrap = styled.section``;

const LoadingSpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
`;
// useEffect(() => {
//   console.log(nextPageToken, "넥스트토큰", data, "데이터");
// }, [nextPageToken, data]);
