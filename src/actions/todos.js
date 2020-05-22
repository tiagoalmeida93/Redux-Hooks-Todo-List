export function addTodoRequest(text) {
  return {
    type: "ADD_TODO_REQUEST",
    payload: text,
  };
}

export function addTodoSuccess(text) {
  return {
    type: "ADD_TODO_SUCCESS",
    payload: text,
  };
}
