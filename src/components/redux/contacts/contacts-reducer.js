import { createReducer } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialStore = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsReducer = createReducer(initialStore, {
  [actions.fetchContactsLoading]:(store)=>({...store, isLoading:true,error: null}),
  [actions.fetchContactsSuccess]:(store, action)=>({...store,items: action.payload, isLoading:false}),
  [actions.fetchContactsError]:(store, action)=>({...store, isLoading:false,error: action.payload}),
  // [addContact]: (state, action) => [action.payload, ...state],
  // [deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
  [actions.addContactsLoading]:(store)=>({...store, isLoading:true,error: null}),
  [actions.addContactsSuccess]:(store, action)=>({...store,items:[action.payload, ...store.items], isLoading:false}),
  [actions.addContactsError]:(store, action)=>({...store, isLoading:false,error: action.payload}),
  [actions.deleteContactsLoading]:(store)=>({...store, isLoading:true,error: null}),
  [actions.deleteContactsSuccess]:(store, action)=>({...store,items:store.items.filter(item => item.id !== action.payload), isLoading:false}),
  [actions.deleteContactsError]:(store, action)=>({...store, isLoading:false,error: action.payload}),
});
export default contactsReducer;