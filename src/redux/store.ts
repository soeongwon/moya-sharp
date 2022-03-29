import { configureStore } from "@reduxjs/toolkit";
import newsformatReducer from "./news/newsformatSlice";
import newsListReducer from "./news/newsListSlice";
import keywordListReducer from "./keyword/keywordsSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
    keywords: keywordListReducer,
    users: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
