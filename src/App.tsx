import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/Mypage";
import { Layout } from "./components/common/layout/Layout";
import AppScrollToTop from "./AppScrollToTop";
import StyleGuide from "./components/common/StyleGuide";
import { Login } from "./pages/Login";
import EditContainer from "./components/edit/EditContainer";

const App = () => {
  return (
    <BrowserRouter>
      <AppScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />}>
            <Route path=":identifier" element={<News />} />
          </Route>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/edit" element={<EditContainer />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage/bookmark" element={<Bookmark />} />
          <Route path="/style" element={<StyleGuide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
