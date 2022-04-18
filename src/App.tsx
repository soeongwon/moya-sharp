import { Layout } from "./components/common/layout/Layout";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";
import ScrollToTop from "./ScrollToTop";
import RootRouters from "./RootRouters";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <Layout>
        <RootRouters />
      </Layout>
    </ConnectedRouter>
  );
};
export default App;
