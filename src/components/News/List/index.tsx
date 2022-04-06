import styled from "@emotion/styled";

import Container from "../../common/layout/Container";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
import ImageArticleList from "./ImageArticleList";
import TextArticleList from "./TextArticleList";
const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading } = useAppSelector(
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
