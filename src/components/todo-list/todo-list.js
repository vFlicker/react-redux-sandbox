import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map(({ id, ...todo }) => {
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem { ...todo } />
      </li>
    )
  });

  return (
    <ul className="todo-list list-group">{ elements }</ul>
  );
};

export default TodoList;
