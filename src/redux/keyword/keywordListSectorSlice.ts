import { call, put, takeEvery } from "redux-saga/effects";
import { fetchNews } from "../../api/newsApi";

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
  console.log(action);
  try {
    yield put(getFetchNewStart()); 

    const data: [] = yield call(fetchNews, action.keyType, action.identifier);
    console.log(data)
    yield put(getFetchNewsSuccess(data));
  } catch (error) {
    yield put(getFetchNewsFail(error));
  }
}

export function getSectorSagaStart(identifier: string, keyType: string) {
  return {
    type: SECTOR_SAGA_START,
    identifier,
    keyType
  };
}

export function fetchSectorKeyword(
  fetchSectorKeyword: string,
  keyType: string,
  identifier: string
) {
  return {
    type: SECTOR_SAGA_START,
    fetchSectorKeyword,
    keyType,
    identifier
  }
}


export function* keywordListSectorSaga() {
  yield takeEvery(SECTOR_SAGA_START, getSectorSaga);
}

