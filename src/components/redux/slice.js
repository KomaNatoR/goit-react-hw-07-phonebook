import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';             // - то є персіст!
import storage from 'redux-persist/lib/storage';            // - то є персіст!

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: "",
};


export const mySlice = createSlice({
    name: "GlobalState",
    initialState: initialState,
    reducers: {
        addContact(state, action) {
            const newContact = [action.payload, ...state.contacts];
            return {...state, contacts: newContact};
        },
        deleteContact(state, action) {
            const resultContact = state.contacts.filter(item=>item.id!==action.payload);
            return { ...state, contacts: resultContact };
        },
        setFilter(state, action) {
            return { ...state, filter: action.payload};
        },
    },
});
export const { addContact, deleteContact, setFilter } = mySlice.actions;

const persistConfig = {                                                      // - то є персіст!
    key: 'contactsLocalStorageKey',
    storage,
    whitelist: ['contacts'],                                                 // - прикольна штука, можна вибирати шо з initialState зберігати!
};
export const persistMySlice = persistReducer(persistConfig, mySlice.reducer); // - то є персіст!

//                                 --- Selectors ---
export const getContacts = store => store.contacts;
export const getFilter = store => store.filter;