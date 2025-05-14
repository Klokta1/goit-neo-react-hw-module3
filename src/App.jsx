import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"

const LOCAL_STORAGE_KEY = "contacts";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact }
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact}/>
        <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
      </div>
    </>
  );
};

export default App;