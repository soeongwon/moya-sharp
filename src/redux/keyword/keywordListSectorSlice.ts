import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export const FETCH_NEWSLIST_START = "FETCH_NEWSLIST_START";

export const FETCH_NEWSLIST_SUCCESS = "FETCH_NEWSLIST_SUCCESS";

export const FETCH_NEWSLIST_FAIL = "FETCH_NEWSLIST_FAIL";

// 액션 생성 함수
export function getFetchNewStart() {
  return {
    type: FETCH_NEWSLIST_START
  };
}

export function getFetchNewsSuccess(data: any) {
  return {
    type: FETCH_NEWSLIST_SUCCESS,
    data
  };
}
export function getFetchNewsFail(error: any) {
  return {
    type: FETCH_NEWSLIST_FAIL,
    error
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_NEWSLIST_START:
      return {
        ...state,
        loading: false,
        error: null
      };

    case FETCH_NEWSLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };

    case FETCH_NEWSLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

//saga

const SECTOR_SAGA_START = "SECTOR_SAGA_START";

function* getSectorSaga(action: any) {
  try {
    yield put(getFetchNewStart());

    const data: [] = yield call(
      axios.get,
      "http://54.180.136.0:3000/search/sectors/green-hydrogen"
    );

    yield put(getFetchNewsSuccess(data));
  } catch (error) {
    yield put(getFetchNewsFail(error));
  }
}

export function getSectorSagaStart() {
  return {
    type: SECTOR_SAGA_START
  };
}

//category

const CATEGORY_SAGA_START = "CATEGORY_SAGA_START";

function* getCategorySaga(action: any) {
  try {
    yield put(getFetchNewStart());

    const data: [] = yield call(
      axios.get,
      "http://54.180.136.0:3000/search/sectors/green-hydrogen"
    );

    yield put(getFetchNewsSuccess(data));
  } catch (error) {
    yield put(getFetchNewsFail(error));
  }
}

export function getCategorySagaStart() {
  return {
    type: CATEGORY_SAGA_START
  };
}

const STARTUP_SAGA_START = "STARTUP_SAGA_START";

function* getStartupSaga(action: any) {
  try {
    yield put(getFetchNewStart());

    const data: [] = yield call(
      axios.get,
      "http://54.180.136.0:3000/search/sectors/green-hydrogen"
    );

    yield put(getFetchNewsSuccess(data));
  } catch (error) {
    yield put(getFetchNewsFail(error));
  }
}

export function getStartupSagaStart() {
  return {
    type: STARTUP_SAGA_START
  };
}

export function* keywordListSectorSaga() {
  yield takeEvery(SECTOR_SAGA_START, getSectorSaga);
  yield takeEvery(CATEGORY_SAGA_START, getCategorySaga);
  yield takeEvery(STARTUP_SAGA_START, getStartupSaga);
}
