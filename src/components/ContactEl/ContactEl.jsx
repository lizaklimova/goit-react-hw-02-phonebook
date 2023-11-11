import { Component } from 'react';

export default class ContactEl extends Component {
  render() {
    const { contacts, onClick } = this.props;
    return contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name}:{contact.number}
        </p>
        <button type="button" onClick={() => onClick(contact.id)}>
          Delete
        </button>
      </li>
    ));
  }
}
