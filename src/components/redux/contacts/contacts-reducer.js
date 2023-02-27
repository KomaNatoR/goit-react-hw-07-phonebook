import { createReducer } from "@reduxjs/toolkit";

import { addContact, deleteContact } from "./contacts-actions";

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];


const contactsReducer = createReducer(initialState, {
    [addContact]: (state, action) => [action.payload, ...state],
    [deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
});
export default contactsReducer;