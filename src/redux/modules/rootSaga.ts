import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

// 하위 saga들을 import
export default function* rootSaga() {
  yield all([authSaga()]);
}
