import { configureStore } from "@reduxjs/toolkit";
import newsformatReducer from "./news/newsformatSlice";
import userReducer from "./user/auth";
import newsListReducer from "./news/newsListSlice";
import keywordListReducer from "./keyword/keywordsSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
    keywords: keywordListReducer,
    users: userReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
