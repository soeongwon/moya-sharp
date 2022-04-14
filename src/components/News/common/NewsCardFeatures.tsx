import React from "react";
import styled from "@emotion/styled";
import { useNewsCommon } from "../hooks/useNewCommon";

const NewsCardFeatures = ({ handleTranslateActive, article }: any) => {
  const { isBookmark, setIsbookmark, addBookmark, deleteBookmark } =
    useNewsCommon();
  function bookmarkEventbind(isBookmarked: boolean) {
    setIsbookmark(!isBookmark);

    if (isBookmarked) {
      addBookmark(article);
    } else {
      deleteBookmark(article);
    }
  }

  return (
    <Feautres>
      <button className="translate" onClick={handleTranslateActive}>
        번역
      </button>
      <div>
        <Bookmark
          isBookmark={isBookmark}
          role="button"
          className="bookmark"
          onClick={() => bookmarkEventbind(!isBookmark)}
        ></Bookmark>
        <i role="button" className="share"></i>
      </div>
    </Feautres>
  );
};
export default NewsCardFeatures;
const Feautres = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 20px 0;
  .translate {
    width: 70px;
    height: 100%;
    background: #4d4d4d;
    color: white;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  }
  div {
    display: flex;
    height: 100%;
    .share {
      width: 40px;
      height: 100%;
      background-image: url("/images/icon-Share-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
`;
interface BookmarkProps {
  isBookmark: boolean;
}

const Bookmark = styled.i<BookmarkProps>`
  width: 40px;
  height: 100%;
  background-size: cover;
  cursor: pointer;
  background: ${({ isBookmark }) =>
      isBookmark === true
        ? "url(/images/icon-Bookmark-filled.svg)"
        : "url(/images/icon-Bookmark-outline.svg)"}
    no-repeat 4.5%;
`;
