import { Layout } from "./components/common/layout/Layout";
import AppRouter from "./AppRouter";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";
const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <AppRouter />
      </Layout>
    </ConnectedRouter>
  );
};
export default App;
