import { Component } from "react";
import { Form } from "./components/Form/Form";
import FormList from "./components/FormList/FormList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container/Container";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.state.contacts.some((i) => i.name === contact.name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  addNewContact = (obj) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, obj] };
    });
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form addNewContact={this.addContact} />
        <h2>Contacts</h2>{" "}
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <FormList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
  }
}
export default App;
