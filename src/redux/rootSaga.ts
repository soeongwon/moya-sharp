import { all } from "redux-saga/effects";
import { keywordListSectorSaga } from "./keyword/keywordListSectorSlice";
import { newsListSaga } from "./news/newsListSlice";
import { authSaga } from "./user/auth";
import { keywordsSaga } from "./keyword/keywordList"
export function* rootSaga() {
  // all 은 여러 사가를 동시에 실행시켜준다.
  yield all([keywordListSectorSaga(), newsListSaga(), authSaga(), keywordsSaga()]);
}
