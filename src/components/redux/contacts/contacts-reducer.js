import { ADD_CONTACT, DELETE_CONTACT } from "./contacts-types";

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CONTACT:
            // const newContact = [action.payload, ...state.contacts];
            return [action.payload,...state];
        case DELETE_CONTACT:
            return state.filter(item=>item.id!==action.payload);
            // return { ...state, contacts: resultContact };
        default:
        return state;
    };
};
export default contactsReducer;