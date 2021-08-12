import React from 'react';
import TodoListItem from '../todo-list-ltem';
import './todo-list.css';

const TodoList = ({
  todos,
  onDeleteClick,
  onToggleDoneClick,
  onToggleImportantClick
}) => {
  const elements = todos.map(({ id, ...todo }) => {
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...todo}
          onDeleteClick={onDeleteClick.bind(null, id)}
          onToggleDoneClick={onToggleDoneClick.bind(null, id)}
          onToggleImportantClick={onToggleImportantClick.bind(null, id)}
        />
      </li>
    )
  });

  return (
    <ul className="todo-list list-group">{elements}</ul>
  );
};

export default TodoList;
