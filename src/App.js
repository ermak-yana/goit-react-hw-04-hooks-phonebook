import { useState } from "react";
import "./App.css";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import CreateContactList from "./components/PhoneList/PhoneList";
import Filter from "./components/Filter/Filter";
import base from "./contacts.json";
import { useLocalStorage } from "./Hook/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useLocalStorage("contacts", base);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const addContact = (contact) => {
    if (!checkContact(contact.name)) {
      setContacts((prevState) => [contact, ...prevState]);
    } else {
      alert(`${contact.name} is alredy in contacts`);
    }
  };

  const checkContact = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const filterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <FormSubmit title={"Name"} phone={"Number"} addContact={addContact} />
      <Filter filter={query} onChange={handleChange} />
      <CreateContactList
        filterContact={filterContact}
        title={"Contacts"}
        removeContact={removeContact}
      />
    </div>
  );
}

export default App;
