import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from '../ContactsForm';
import ContactsList from '../ContactsList';
import FilterSearch from '../FilterSearch';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = formState => {
    const { name, number } = formState;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterSearch = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  checkExistingContact = value => {
    return this.state.contacts.some(contact => contact.name === value);
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //! FORMIK--------------------------------------------
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm
          addContact={this.addContact}
          checkContact={this.checkExistingContact}
        />
        <h2>Contacts</h2>
        <FilterSearch value={filter} onChange={this.filterSearch} />
        <ContactsList
          contacts={filteredContacts}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
