import "./index.css";
import { Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import EditContainer from "./components/edit/EditContainer";
import StyleGuide from "./components/common/StyleGuide";
import Bookmark from "./components/myPage/Bookmark";
import Mypage from "./pages/MypagePage";
import Home from "./pages/HomePage";
import News from "./pages/NewsPage";
import LoginServicePage from "./pages/LoginServicePage";

const AppRouter = () => {
  return (
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route path="/edit" component={EditContainer} />
        <Route exact path="/mypage/bookmark" component={Bookmark} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/news/:query" component={News} />
        <Route exact path="/news" component={News} />
        <Route exact path="/" component={Home} />
        <Route exact path="/style" component={StyleGuide} />
        <Route exact path="/login" component={LoginServicePage} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Switch>
    </QueryParamProvider>
  );
};
export default AppRouter;
