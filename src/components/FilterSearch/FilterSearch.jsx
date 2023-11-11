import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class FilterSearch extends Component {
  searchId = nanoid();

  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <label htmlFor={this.searchId}>Find contact by name</label>
        <input
          id={this.searchId}
          type="text"
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
}
