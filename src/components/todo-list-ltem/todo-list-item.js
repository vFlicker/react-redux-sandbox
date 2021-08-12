import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({
  done,
  important,
  label,
  onDeleteClick,
  onToggleDoneClick,
  onToggleImportantClick
}) => {
  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDoneClick}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportantClick}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleteClick}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;
