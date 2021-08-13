import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import { FilterType } from '../../const';
import './app.css';

export default class App extends Component {
  id = 1;

  state = {
    todos: [
      this.createTodoItem('Breakfast'),
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Learn React'),
    ],
    currentFilter: FilterType.ALL,
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

  getFilteredTodo = (todos, filterType) => {
    switch (filterType) {
      case FilterType.DONE:
        return todos.filter((todo) => todo.done);
      case FilterType.ACTIVE:
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }


  onDeleteClick = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter((todo) => !(todo.id === id))
      }
    });
  };

  onFilterChange = (currentFilter) => {
    this.setState({ currentFilter });
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
    const { todos, currentFilter } = this.state;
    const visibleItems = this.getFilteredTodo(todos, currentFilter);
    const doneCount = visibleItems.filter((todo) => todo.done).length;
    const todoCount = visibleItems.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="search-panel d-flex">
          <ItemStatusFilter
            onFilterChange={this.onFilterChange}
            filter={currentFilter}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleteClick={this.onDeleteClick}
          onToggleDoneClick={this.onToggleDoneClick}
          onToggleImportantClick={this.onToggleImportantClick}
        />
        <ItemAddForm onTodoSubmit={this.onTodoSubmit} />
      </div>
    );
  }
};
