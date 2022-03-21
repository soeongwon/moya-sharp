import { useState, useEffect } from "react";

export const useScrollHeader = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  return { updateScroll, scrollPosition };
};
