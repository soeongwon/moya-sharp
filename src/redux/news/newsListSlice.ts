import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export const NEWSLIST_START = "NEWSLIST_START";

export const NEWSLIST_SUCCESS = "NEWSLIST_SUCCESS";

export const NEWSLIST_FAIL = "NEWSLIST_FAIL";

// 액션 생성 함수
export function getNewslistStart() {
  return {
    type: NEWSLIST_START
  };
}

export function getNewslistSuccess(data: any) {
  return {
    type: NEWSLIST_SUCCESS,
    data
  };
}
export function getNewslistFail(error: any) {
  return {
    type: NEWSLIST_FAIL,
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
    case NEWSLIST_START:
      return {
        ...state,
        loading: false,
        error: null
      };

    case NEWSLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.newsList
      };

    case NEWSLIST_FAIL:
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

const NEWSLIST_SAGA_START = "NEWSLIST_SAGA_START";

type data = {
  data: [];
  nextToken: String;
};

function* getNewslistSaga(action: any) {
  console.log(action);
  try {
    yield put(getNewslistStart());

    const res: data = yield call(
      axios.get,
      "http://54.180.136.0:3000/search?mediaType=mp,op&timeFilter=w1&language=en&orderBy=latest&keyType=tickers&keyParam=aapl&exchange=nasdaq"
    );
    console.log(res);
    yield put(getNewslistSuccess(res.data));
  } catch (error) {
    yield put(getNewslistFail(error));
  }
}

export function fetchNewList(payload: any) {
  return {
    type: NEWSLIST_SAGA_START,
    payload
  };
}

export function* newsListSaga() {
  yield takeEvery(NEWSLIST_SAGA_START, getNewslistSaga);
}
