import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  FOLLOW,
  FOLLOW_FAILURE,
  FOLLOW_SUCCESS,
  LOG_IN,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  UNFOLLOW,
  UNFOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
} from "../reducer/User";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    console.log("login saga");
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* logout() {
  try {
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function* signUp() {
  try {
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* follow(action) {
  try {
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FOLLOW_FAILURE,
      error: e.response.data,
    });
  }
}

function* unfollow(action) {
  try {
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNFOLLOW_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(FOLLOW, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW, unfollow);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}

export default function* userSaga() {
  yield all([
		fork(watchFollow),
		fork(watchUnfollow),
		fork(watchLogIn),
		fork(watchLogOut),
		fork(watchSignUp),
	]);
}
