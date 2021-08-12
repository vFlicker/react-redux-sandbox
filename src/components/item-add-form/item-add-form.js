import React from 'react';
import './item-add-form.css';

const ItemAddForm = ({ onAddClick }) => {
  return (
    <form className="bottom-panel d-flex">
      <input type="text" className="form-control new-todo-label" placeholder="What needs to be done" />
      <button
        className="btn btn-outline-secondary"
        onClick={onAddClick}
      >
        Add
      </button>
    </form>
  );
};

export default ItemAddForm;
