import styled from "@emotion/styled";
import TextArticleList from "./TextArticleList";
import ImageArticleList from "./ImageArticleList";
import CommonContainer from "../../layout/CommonContainer";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
const ListContainer = () => {
  const { NewsFormats } = useNewsFormats();
  const { newListData, loading } = useAppSelector(
    (state: RootState) => state.newsList
  );

  return (
    <CommonContainer>
      <Wrap>
        {loading === true ? (
          <div>....isLoading</div>
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
      </Wrap>
    </CommonContainer>
  );
};

export default ListContainer;

const ImageContent = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
  padding-top: 50px;
`;
const TextContent = styled.div`
  width: 100%;
  padding-bottom: 280px;
`;
const Wrap = styled.div`
  min-height: 300px;
`;
