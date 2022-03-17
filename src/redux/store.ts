import { configureStore } from "@reduxjs/toolkit";

import newsformatReducer from "./news/newsformatSlice";
import newsListReducer from "./news/newsListSlice";
import newsSortReducer from "./news/newsSortSlice";
import memberDataReducer from "./member/memberDataSlice";
import keywordListReducer from "./keyword/keywordsSlice";

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
    newsSorts: newsSortReducer,
    memberDatas: memberDataReducer,
    keywords: keywordListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
