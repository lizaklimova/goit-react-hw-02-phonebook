import { Component } from 'react';
import ContactEl from '../ContactEl';
import { ContactsUl } from './ContactsList.styled';
export default class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <>
        <ContactsUl>
          {contacts.length ? (
            <ContactEl contacts={contacts} onClick={onClick} />
          ) : (
            <p>No contacts found</p>
          )}
        </ContactsUl>
      </>
    );
  }
}
