import { all } from "redux-saga/effects";
import todo from "./sagas";

export default function* rootSaga() {
  return yield all([todo]);
}
