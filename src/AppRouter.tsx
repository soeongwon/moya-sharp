import Home from "./pages/Home";
import News from "./pages/News";
import "./index.css";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/Mypage";
import EditContainer from "./components/edit/EditContainer";
import { Login } from "./pages/Login";
import { Route, Switch } from "react-router-dom";

import AppScrollToTop from "./AppScrollToTop";
// import GlobalHeader from "./components/layout/GlobalHeader";
// import GlobalFooter from "./components/layout/GlobalFooter";

const AppRouter = () => {
  return (
    <Switch>
      {/* <Layout /> */}
      <Route path="/edit" component={EditContainer} />
      <Route exact path="/mypage/bookmark/:id" component={Bookmark} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/news/:identifier" component={News} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
export default AppRouter;
