import { Component } from 'react';
import ContactEl from '../ContactEl';

export default class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;
    return (
      <>
        <ul>{<ContactEl contacts={contacts} onClick={onClick} />}</ul>
      </>
    );
  }
}
