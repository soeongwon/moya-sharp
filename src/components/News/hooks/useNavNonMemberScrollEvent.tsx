import { useState, useEffect } from "react";

export const useNavNonMemberScrollEvent = () => {
  const [mainHegiht, setMainHeight] = useState<boolean>(false);
  useEffect(() => {
    const handleMainHeight = () => {
      if (window.scrollY < 80) setMainHeight(false);
      else if (window.scrollY >= 80) setMainHeight(true);
    };
    window.addEventListener("scroll", handleMainHeight);
    return () => setMainHeight(true);
  }, []);

  //백그라운드 조정
  const [background, setBackground] = useState<boolean>(true);
  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY < 80) setBackground(true);
      else if (window.scrollY >= 80) setBackground(false);
    };
    window.addEventListener("scroll", handleBackground);
    return () => setBackground(true);
  }, []);
  //높이 조정
  const [height, setHeight] = useState<boolean>(true);
  useEffect(() => {
    const handleHight = () => {
      if (window.scrollY > 150) setHeight(false);
      else setHeight(true);
    };
    window.addEventListener("scroll", handleHight);
    return () => setHeight(true);
  }, []);
  //비회원 회원에 따라 탭키워드 추가버튼 show
  const [searchFormHidden, setSeacrchFormHidden] = useState<boolean>(false);
  useEffect(() => {
    const handleSerachShow = () => {
      if (window.scrollY > 150) setSeacrchFormHidden(true);
      else setSeacrchFormHidden(false);
    };
    window.addEventListener("scroll", handleSerachShow);
    return () => setSeacrchFormHidden(true);
  }, []);
  //비회원 회원에 따라 nav show
  const [navHidden, setNavHidden] = useState<boolean>(false);
  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY > 150) setNavHidden(true);
      else setNavHidden(false);
    };
    window.addEventListener("scroll", handleNav);
    return () => setNavHidden(false);
  }, []);

  return {
    mainHegiht,
    background,
    height,
    searchFormHidden,
    navHidden
  };
};
