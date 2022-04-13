import { call, put, takeEvery } from "redux-saga/effects";
import { Action } from "redux-actions";
import { GetAllMyKewords } from "../../api/myKewordApi"

const GET_KEYWORDS = "/GET_KEYWORDS"
const GET_KEYWORDS_SUCCESS = "/GET_KEYWORDS_SUCCESS"

export const getKeywords = () => {
  return {
    type: GET_KEYWORDS
  }
}
export const getKeywordsSuccess = (data: any) => {
  return {
    type: GET_KEYWORDS_SUCCESS,
    data
  }
}


const initialState = {
  loading: false,
  data: [],
  error: null
};


export default function reducer (state= initialState, action: any) {
  switch (action.type) {
    case GET_KEYWORDS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case GET_KEYWORDS_SUCCESS:
      return {
        ...state,
        action: action.data,
      }
    default:
      return state;
  }
}

const GETKEYWORDS_SAGA = "GETKEYWORDS_SAGA"

type data = {
  data: [];
  hasMore: String;
};

export function* getKeywordsSaga() {
  try {
    const keywords: data = yield call(GetAllMyKewords)
    yield put({
      type: GET_KEYWORDS_SUCCESS,
      payload: keywords,
    })
  } catch (e) {
   
  }
}


export function* KeywordsSaga() {
  yield takeEvery(GETKEYWORDS_SAGA, getKeywordsSaga)
}