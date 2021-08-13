import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
  id = 1;

  state = {
    todos: [
      this.createTodoItem('Breakfast'),
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Learn React'),
    ],
  };

  createTodoItem(label) {
    return {
      id: this.id++,
      label: label,
      important: false,
      done: false,
    }
  }

  toggleProperty(array, id, propName) {
    const index = array.findIndex((todo) => todo.id === id);
    const oldTodo = array[index];
    const newTodo = { ...oldTodo, [propName]: !oldTodo[propName] };

    return [
      ...array.slice(0, index),
      newTodo,
      ...array.slice(index + 1)
    ];
  }


  onDeleteClick = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter((todo) => !(todo.id === id))
      }
    });
  };

  onTodoSubmit = (label) => {
    const newTodo = this.createTodoItem(label);

    this.setState(({ todos }) => {
      return {
        todos: [...todos, newTodo]
      }
    });
  };

  onToggleDoneClick = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'done')
      }
    });
  };

  onToggleImportantClick = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'important')
      }
    });
  };

  render() {
    const { todos } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const todoCount = todos.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          onDeleteClick={this.onDeleteClick}
          onToggleDoneClick={this.onToggleDoneClick}
          onToggleImportantClick={this.onToggleImportantClick}
        />
        <ItemAddForm onTodoSubmit={this.onTodoSubmit} />
      </div>
    );
  }
};
