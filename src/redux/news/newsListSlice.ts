import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getNewList, SearchType } from "../../api/newsListApi";
import { Action } from "redux-actions";
import { fetchNews } from "../../api/newsApi";

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
  error: null,
  hasMore: null
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
        loading: false,
        data: action.data.newsList,
        hasMore: action.data.nextPageToken,
        error: null
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
  hasMore: String;
};

function isExchange(action: Action<SearchType>) {
  const {
    orderBy,
    keyType,
    paramValue,
    language,
    timeFilter,
    mediaType,
    exchange
  } = action.payload;
  if (action.payload.exchange) {
    const query = `/news?orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}&language=${language}&timeFilter=${timeFilter}&mediaType=${mediaType}&exchange=${exchange}`;
    return query;
  } else {
    const query = `/news?orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}&language=${language}&timeFilter=${timeFilter}&mediaType=${mediaType}`;
    return query;
  }
}

function* getNewslistSaga(action: Action<SearchType>) {
  const {
    orderBy,
    keyType,
    paramValue,
    language,
    timeFilter,
    mediaType,
    exchange
  } = action.payload;
  try {
    yield put(getNewslistStart());
    if (
      keyType === "sectors" ||
      keyType === "startup" ||
      keyType === "category"
    ) {
      console.log("getNewslistSaga", action);
      const data: data = yield call(fetchNews, keyType, paramValue);
      yield put(getNewslistSuccess(data));
      yield put(push(isExchange(action)));
    } else {
      const data: data = yield call(getNewList, action.payload);
      yield put(getNewslistSuccess(data));
      yield put(push(`/news/${paramValue}`));
    }
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
