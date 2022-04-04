import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import MypagePage from "./pages/MypagePage";
import { Layout } from "./components/layout/Layout";
import AppScrollToTop from "./AppScrollToTop";
import StyleGuide from "./components/common/StyleGuide";
const App = () => {
  return (
    <BrowserRouter>
      <AppScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<NewsPage />}>
            <Route path=":query" element={<NewsPage />} />
          </Route>
          <Route path="/mypage" element={<MypagePage />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
          <Route path="/style" element={<StyleGuide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
