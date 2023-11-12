import { Component } from 'react';
import { ContactLi, ContactDeleteBtn } from './ContactEl.styled';
export default class ContactEl extends Component {
  render() {
    const { contacts, onClick } = this.props;
    return contacts.map((contact, i) => (
      <ContactLi key={contact.id}>
        <p>
          {i + 1}. {contact.name}: {contact.number}
        </p>
        <ContactDeleteBtn type="button" onClick={() => onClick(contact.id)}>
          Delete ❌
        </ContactDeleteBtn>
      </ContactLi>
    ));
  }
}
