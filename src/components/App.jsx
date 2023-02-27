// import { useState, useEffect } from "react";


import FormikForm from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { MainDiv } from "./app.styled";

// const template = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const App = () => {
//   const [contacts, setContacts] = useState(()=>
//     JSON.parse(window.localStorage.getItem('contacts')) ?? template
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   },[contacts])
// // ---------------------------------------------------------||   ФУНКЦІЇ ОБРОБКИ   ||
//   const addContact = (contact) => {
//     const personNormalize = contact.name.toLowerCase().trim();
//     const contactsMap = contacts.find(cont => cont.name.toLowerCase() === personNormalize);

//     if (contactsMap) return alert("Це хіба можна так робити?");
//     setContacts(prevConts=>[contact,...prevConts]);
//   };
//   const deleteContact = (id) => {
//     // const deleteCont = contacts.filter(cont => cont.id !== id);
//     // setContacts(deleteCont);
//     setContacts(prevCont=>prevCont.filter(cont => cont.id !== id));
//   };
//   const onFilterChange = (e) => {
//     const { value } = e.target;

//     setFilter(value);
//   };
//   const normalizeFilter = filter.toLowerCase().trim();
//   const visiblePersons = contacts.filter(cont=>cont.name.toLowerCase().includes(normalizeFilter));

//   // ---------------------------------------------------------||   РЕНДЕР   ||
//   return (
//     <MainDiv>
//       <h1>Phonebook</h1>
//       <FormikForm hendleSubmit={addContact} />
      
//       <h2>Contacts</h2>
//       <Filter onFilterChange={onFilterChange} value={filter} />
//       <ContactList onClick={deleteContact} contacts={visiblePersons} />
//     </MainDiv>
//   );
// };
// ---------------------------------------------------------- || ReWorking
// import { useSelector, useDispatch } from "react-redux";

// import { addContact, deleteContact, setFilter } from "./redux/action";
// import { getAllContacts, getFilter, getFilteredContacts } from "./redux/selectors";

// import { addContact, deleteContact } from "./redux/contacts/contacts-action";
// import { getAllContacts } from "./redux/contacts/contacts-selectors";
// import { setFilter } from "./redux/filter/filter-action";
// import { getFilter, getFilteredContacts } from "./redux/filter/filter-selectors";

export const App = () => {
//   const contacts = useSelector(getAllContacts);
//   const filteredContacts = useSelector(getFilteredContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const onAddContact = (contact) => {
//     const personNormalize = contact.name.toLowerCase().trim();
//     const contactsFind = contacts.find(cont => cont.name.toLowerCase() === personNormalize);

//     if (contactsFind) return alert("Це хіба можна так робити?");
//     // setContacts(prevConts=>[contact,...prevConts]);
    
//     dispatch(addContact(contact));
//   };
//   const onDeleteContact = (id) => {
//     dispatch(deleteContact(id));
//   };
//   const onFilterChange = (e) => {
//     const { value } = e.target;

//     dispatch(setFilter (value));
//   };

  return (
    <MainDiv>
      <h1>Phonebook</h1>
      <FormikForm/>
      
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </MainDiv>
  );
};


