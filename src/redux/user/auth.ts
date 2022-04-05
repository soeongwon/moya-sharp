import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import UserService from "../../api/UserService";
import sessionService from "../../utils/sessionService";

type AuthState = {
  isLogin: boolean;
  loading: boolean;
  error: null;
};

export type loginReqType = {
  userId: string;
  password: string;
};

const initialState: AuthState = {
  isLogin: false,
  loading: false,
  error: null
};

const prefix = "moya-sharp/auth";

const auth = createSlice({
  name: "test",
  initialState,
  reducers: {
    pending: state => ({
      ...state,
      loading: true,
      error: null
    }),
    success: state => ({
      isLogin: true,
      loading: false,
      error: null
    }),
    fail: (state, action: any) => ({
      isLogin: false,
      loading: false,
      error: action.payload
    })
  }
});

export const { pending, success, fail } = auth.actions;
export default auth.reducer;

export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<loginReqType>) {
  try {
    yield put(pending());
    yield call(UserService.login, action.payload);
    yield put(success());
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data.error || "UNKNOWN_ERROR")));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select(state => state.auth.token);
    yield call(UserService.logout, token);
    sessionService.set(token);
    yield put(success());
  } catch (error: any) {
  } finally {
    sessionService.remove();
    yield put(success());
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
