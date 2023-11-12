import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  SearchContainer,
  SearchInput,
  SearchLabel,
} from './FilterSearch.styled';
export default class FilterSearch extends Component {
  searchId = nanoid();

  render() {
    const { value, onChange } = this.props;
    return (
      <SearchContainer>
        <SearchLabel htmlFor={this.searchId}>Find contact by name</SearchLabel>
        <SearchInput
          id={this.searchId}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name"
        />
      </SearchContainer>
    );
  }
}
