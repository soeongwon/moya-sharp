import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchNewList } from "../../../redux/news/newsListSlice";
interface Props {
  options: object;
  query: object;
}
const Observer = ({ options, query }: Props) => {
  const [ref, inView] = useInView(options);
  const { data, loading, nextPageToken } = useAppSelector(
    state => state.newsList
  );
  const dispatch = useAppDispatch();
  const 무한스크롤조건 = !loading && inView;

  useEffect(() => {
    function getNextPageNewsList() {
      if (무한스크롤조건 && data !== undefined) {
        dispatch(fetchNewList({ ...query, nextPageToken }));
      }
    }
    getNextPageNewsList();
  }, [dispatch, nextPageToken, query, 무한스크롤조건, data]);

  return (
    <InfinityScrollView ref={ref}>무한스크롤 탐지컴포넌트</InfinityScrollView>
  );
};
export default Observer;
const InfinityScrollView = styled.div`
  font-size: 0;
`;
