import { createSlice } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { Action, createActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import UserService from "../../api/UserService";

type AuthState = {
  isLogin: boolean;
  error: null;
};

export type loginReqType = {
  userId: string;
  password: string;
};

const initialState: AuthState = {
  isLogin: false,
  error: null
};

const prefix = "moya-sharp/auth";

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    pending: state => ({
      ...state,
      error: null
    }),
    success: state => ({
      isLogin: true,
      error: null
    }),
    fail: (state, action: any) => ({
      isLogin: false,
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
    yield put(push("/"));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data.error || "UNKNOWN_ERROR")));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select(state => state.auth.token);
    yield call(UserService.logout, token);
    yield put(success());
  } catch (error: any) {
  } finally {
    yield put(success());
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
