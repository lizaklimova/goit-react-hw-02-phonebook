import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class ContactsForm extends Component {
  idName = nanoid();
  idTel = nanoid();

  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.name;

    this.props.checkContact(value)
      ? Notify.info(`Name ${value} already exists`)
      : this.props.addContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form autoComplete="off" onSubmit={this.onSubmit}>
        <label htmlFor={this.idName}>Name</label>
        <input
          id={this.idName}
          type="text"
          name="name"
          onChange={this.onChange}
          value={name}
          required
        />
        <label htmlFor={this.idTel}>Number</label>
        <input
          id={this.idTel}
          type="tel"
          name="number"
          onChange={this.onChange}
          value={number}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
