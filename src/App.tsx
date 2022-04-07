import { Layout } from "./components/common/layout/Layout";
import AppRouter from "./AppRouter";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";
import AppScrollToTop from "./AppScrollToTop";
<<<<<<< HEAD
<<<<<<< HEAD
import StyleGuide from "./components/common/StyleGuide";
import { Login } from "./pages/Login";
import EditContainer from "./components/edit/EditContainer";

=======
>>>>>>> 88f8dbb168ed34a1b0bedce58021c2eb933f46b3
=======
>>>>>>> 88f8dbb168ed34a1b0bedce58021c2eb933f46b3
const App = () => {
  return (
    <ConnectedRouter history={history}>
      <AppScrollToTop/>
      <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <AppRouter />
>>>>>>> 88f8dbb168ed34a1b0bedce58021c2eb933f46b3
=======
        <AppRouter />
>>>>>>> 88f8dbb168ed34a1b0bedce58021c2eb933f46b3
      </Layout>
    </ConnectedRouter>
  );
};
export default App;
