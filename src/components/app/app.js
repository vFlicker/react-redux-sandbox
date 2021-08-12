import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

const App = () => {
  const todoData = [
    { id: 1, label: 'Breakfast', important: false },
    { id: 2, label: 'Drink coffee', important: false },
    { id: 3, label: 'Learn React', important: true },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
      <ItemAddForm />
    </div>
  );
};

export default App;
