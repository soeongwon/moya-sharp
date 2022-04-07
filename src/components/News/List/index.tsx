import styled from "@emotion/styled";
import Container from "../../common/layout/Container";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
import ImageArticleList from "./ImageArticleList";
import TextArticleList from "./TextArticleList";

const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading, hasMore } = useAppSelector(
    (state: RootState) => state.newsList
  );
  console.log(data, hasMore);
  // const { searchNews } = useSearch();
  // const { ref, inView } = useInView({
  //   threshold: 0.3,
  //   rootMargin: "0px 0px 400px 0px"
  // });
  // const isLoadMore = useMemo(
  //   () => !loading && hasMore && inView,
  //   [hasMore, loading, inView]
  // );

  // useEffect(() => {
  //   if (isLoadMore) {
  //     searchNews()
  //   }
  // }, [searchNews, isLoadMore]);

  return (
    <Wrap>
      <Container>
        {loading === true ? (
          <div style={{ paddingBottom: "280px" }}>....isLoading</div>
        ) : (
          <>
            {(function render() {
              if (NewsFormats === "Image") {
                return (
                  <ImageContent>
                    <ImageArticleList newListData={data} />
                  </ImageContent>
                );
              } else if (NewsFormats === "Text") {
                return (
                  <TextContent>
                    <TextArticleList newListData={data} />
                  </TextContent>
                );
              }
            })()}
          </>
        )}
        {/* {!loading && hasMore && <ObserverView ref={ref} />} */}
      </Container>
    </Wrap>
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
