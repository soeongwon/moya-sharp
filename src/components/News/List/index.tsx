import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
import { StringParam, useQueryParams } from "use-query-params";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import Container from "../../common/layout/Container";
import ImageArticleList from "./ImageArticleList";
import TextArticleList from "./TextArticleList";

const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading, nextPageToken } = useAppSelector(
    (state: RootState) => state.newsList
  );
  const dispatch = useAppDispatch();
  const [query, setQuery] = useQueryParams({
    orderBy: StringParam,
    keyType: StringParam,
    paramValue: StringParam,
    language: StringParam,
    timeFilter: StringParam,
    mediaType: StringParam,
    exchange: StringParam
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px 100px 0px",
    trackVisibility: true,
    delay: 2000
  });

  const 무한스크롤조건 = !loading && nextPageToken && inView;

  useEffect(() => {
    if (무한스크롤조건) {
      dispatch(fetchNewList({ ...query, nextPageToken }));
    }
  }, [dispatch, query, nextPageToken, 무한스크롤조건]);
  useEffect(() => {
    console.log(nextPageToken, "넥스트토큰", data, "데이터");
  }, [nextPageToken, data]);

  return (
    <>
      <Wrap>
        <Container>
          <>
            {NewsFormats === "Image" && (
              <ImageContent>
                <ImageArticleList newListData={data} />
              </ImageContent>
            )}
            {NewsFormats === "Text" && (
              <TextContent>
                <TextArticleList newListData={data} />
              </TextContent>
            )}
          </>
          {loading && <div>....isLoading</div>}
        </Container>
      </Wrap>
      {loading === false && nextPageToken && <ObserverView ref={ref} />}
    </>
  );
};

export default List;
const Wrap = styled.section``;
const ImageContent = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
`;
const TextContent = styled.div`
  width: 100%;
  padding-bottom: 280px;
`;
const ObserverView = styled.div``;
