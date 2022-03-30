import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/Mypage";
import { Layout } from "./components/layout/Layout";
import EditContainer from "./components/edit/EditContainer";
import AppScrollToTop from "./AppScrollToTop";
const App = () => {
  return (
    <BrowserRouter>
      <AppScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/" element={<News />}>
            <Route path="/news/:query" element={<News />} />
          </Route>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
          <Route path="/edit" element={<EditContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
