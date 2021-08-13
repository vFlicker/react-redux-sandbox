import React, { Component } from 'react';
import { FilterType } from '../../const';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: FilterType.ALL, label: 'All' },
    { name: FilterType.ACTIVE, label: 'Active' },
    { name: FilterType.DONE, label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          onClick={onFilterChange.bind(null, name)}
          key={name}
        >
          { label }
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};
