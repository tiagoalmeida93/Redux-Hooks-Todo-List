import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todosAction from '../actions/todos';

function TodoList(props) {
  const [newTodoText, setNewTodoText] = useState('');
  console.log(props)

  function addNewTodo() {
    props.addTodo(newTodoText)
    setNewTodoText('')
  }

  return (
    <>
      <ul>
        <li>Item do todo</li>
      </ul>

      <input 
        type="text"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
      />
      <button onClick={() => addNewTodo()}>Novo Todo</button>
    </>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todosAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)