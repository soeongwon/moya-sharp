import { useState } from "react";
export const useNewsCommon = () => {
  const [isBookmark, setIsbookmark] = useState<boolean>(true);

  function onbookmark() {
    setIsbookmark(!isBookmark)
  }

  return {isBookmark,onbookmark};
};
