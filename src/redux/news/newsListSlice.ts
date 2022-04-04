import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchSectorKeyword } from "../../api/sectorApi";

export const NEWSLIST_START = "NEWSLIST_START";

export const NEWSLIST_SUCCESS = "NEWSLIST_SUCCESS";

<<<<<<< HEAD
type NewsListState = {
  newListData: NewsType[];
  nextPageToken: string | undefined;
  loading: boolean;
  order_by: "top" | "latest" | "popular";
  error: any;
};
=======
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
>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037

const initialState = {
  loading: false,
<<<<<<< HEAD
  error: null,
  order_by:"top"
};

const NewsListSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNewList.pending, state => {
      state.loading = true;
      state.newListData = [];
      state.error = null;
      state.nextPageToken = "";
    });

    builder.addCase(fetchNewList.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.order_by=action.payload
      state.newListData.push(...state.newListData, ...action.payload.stories);
      state.nextPageToken = action.payload.nextPageToken;
    });

    builder.addCase(fetchNewList.rejected, (state, action: any) => {
      console.log(action);
      state.loading = false;
      state.error = action.error.message;
      state.nextPageToken = "";
    });
=======
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
        loading: false,
        data: action.data.newsList,
        error: null
      };

    case NEWSLIST_FAIL:
      console.log("NEWSLIST_FAIL error", action);

      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
>>>>>>> f2ae2a00d6e2aa8eb794d5a61c9542bdf0fe8037
  }
}

//saga

const NEWSLIST_SAGA_START = "NEWSLIST_SAGA_START";

type data = {
  data: [];
  nextToken: String;
};

function* getNewslistSaga(action: any) {
  console.log("getNewslistSaga", action);
  try {
    yield put(getNewslistStart());
    if (
      action.payload.keyType === "sectors" ||
      action.payload.keyType === "startup" ||
      action.payload.keyType === "category"
    ) {
      const res: data = yield call(
        fetchSectorKeyword,
        action.payload.keyType,
        action.payload.identifier
      );
      yield put(getNewslistSuccess(res.data));
    } else {
      const res: data = yield call(
        axios.get,
        "http://54.180.136.0:3000/search?mediaType=mp,op&timeFilter=w1&language=en&orderBy=latest&keyType=tickers&keyParam=aapl&exchange=nasdaq"
      );
      yield put(getNewslistSuccess(res.data));
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
