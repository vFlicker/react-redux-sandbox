import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchText: ''
  }

  onInputChange = (evt) => {
    const searchText = evt.target.value;
    this.setState({ searchText });
    this.props.onSearchChange(searchText);
  }

  render() {
    return (
      <input
        type="text"
        id="search-input"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onInputChange}
        value={this.state.searchText}
      />
    )
  }
};
