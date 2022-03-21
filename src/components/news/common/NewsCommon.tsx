import React from "react";
import styled from "@emotion/styled";
import { useNewsCommon } from "./../hooks/useNewCommon";
export const NewsFeatures = () => {
  const { isBookmark, onbookmark } = useNewsCommon();

  return (
    <Feautres>
      <button className="translate">번역</button>
      <div>
        <Bookmark
          isBookmark={isBookmark}
          role="button"
          className="bookmark"
          onClick={onbookmark}
        ></Bookmark>
        <i role="button" className="share"></i>
      </div>
    </Feautres>
  );
};

//NewsFeatures Style
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
        ? "url(/images/icon-Bookmark-outline.svg)"
        : "url(/images/icon-Bookmark-filled.svg)"}
    no-repeat 4.5%;
`;

//ArticleFooter Style
