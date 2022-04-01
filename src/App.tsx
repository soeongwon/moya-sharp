import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/Mypage";
import { Layout } from "./components/layout/Layout";
import AppScrollToTop from "./AppScrollToTop";
import Example from "./pages/Example";

const App = () => {
  return (
    <BrowserRouter>
      <AppScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />}>
            <Route path=":query" element={<News />} />
          </Route>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
