import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import UserService from "../../api/UserService";
import sessionService from "../../utils/sessionService";
import { push } from "react-router-redux";

type AuthState = {
  session: string;
  loading: boolean;
  error: null;
};

export type loginReqType = {
  userId: string;
  password: string;
};

const initialState: AuthState = {
  session: "",
  loading: false,
  error: null
};

const prefix = "moya-sharp/auth";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null
    }),
    SUCCESS: (state, action) => ({
      session: action.payload,
      loading: false,
      error: null
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  },
  initialState,
  { prefix }
);

export default reducer;

//saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<loginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    sessionService.set(token);
    //localstorage
    yield put(success(token));
    //push
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
    sessionService.set(token);
    yield put(success(token));
  } catch (error: any) {
  } finally {
    sessionService.remove();
    yield put(success(null));
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
