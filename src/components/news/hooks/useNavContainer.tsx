import { useState } from "react";

export const useNavContainer = () => {
  const [background, setBackground] = useState<boolean>(true);
  const [height, setHeight] = useState<boolean>(true);
  const [searchFormHidden, setSeacrchFormHidden] = useState<boolean>(false);
  const [navHidden, setNavHidden] = useState<boolean>(false);
  function ScrollEvent(e: Event) {
    if (window.scrollY < 399) {
      setBackground(true);
    } else if (window.scrollY >= 399) {
      setBackground(false);
    }

    if (window.scrollY > 500) {
      setHeight(false);
    } else {
      setHeight(true);
    }

    if (window.scrollY > 500) {
      setSeacrchFormHidden(true);
    } else {
      setSeacrchFormHidden(false);
    }

    if (window.scrollY > 500) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  }

  return {
    ScrollEvent,
    background,
    height,
    searchFormHidden,
    setBackground,
    setHeight,
    setSeacrchFormHidden,
    navHidden
  };
};
