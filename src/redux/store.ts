import { configureStore } from "@reduxjs/toolkit";
import newsformatReducer from "./news/newsformatSlice";
import userReducer from "./user/auth";
import newsListReducer from "./news/newsListSlice";
import keywordListReducer from "./keyword/keywordsSlice";
<<<<<<< HEAD
import userReducer from "./user/userSlice";
=======
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});
>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
<<<<<<< HEAD
    keywords: keywordListReducer,
    users: userReducer
  }
=======
    newsSorts: newsSortReducer,
    memberDatas: memberDataReducer,
    keywords: keywordListReducer,
    user: userReducer
  },
  middleware: [sagaMiddleware]
>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
