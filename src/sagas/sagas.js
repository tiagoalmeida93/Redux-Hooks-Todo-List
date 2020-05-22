import { delay, put, all, takeLatest } from "redux-saga/effects";
import { addTodoSuccess } from "../actions/todos";

function* asyncAddTodo(action) {
  yield delay(2000);

  yield put(addTodoSuccess(action.payload));
}

export default all([takeLatest("ADD_TODO_REQUEST", asyncAddTodo)]);
