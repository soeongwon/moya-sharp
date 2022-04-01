import styled from "@emotion/styled";
import TextArticleList from "./TextArticleList";
import ImageArticleList from "./ImageArticleList";
import Container from "../../common/Container";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { newListData, loading } = useAppSelector(
    (state: RootState) => state.newsList
  );

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
                    <ImageArticleList newListData={newListData} />
                  </ImageContent>
                );
              } else if (NewsFormats === "Text") {
                return (
                  <TextContent>
                    <TextArticleList newListData={newListData} />
                  </TextContent>
                );
              }
            })()}
          </>
        )}
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
