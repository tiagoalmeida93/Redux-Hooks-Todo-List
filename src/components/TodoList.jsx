import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoRequest } from "../actions/todos";

export default function TodoList() {
  const [newTodoText, setNewTodoText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function addNewTodo() {
    if (newTodoText.length) {
      dispatch(addTodoRequest({ text: newTodoText }));
      setNewTodoText("");
    }
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={() => addNewTodo()}>Novo Todo</button>
    </>
  );
}
