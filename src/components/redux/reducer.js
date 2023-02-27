import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./types";

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: "",
};

const rootReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_CONTACT:
            const newContact = [action.payload, ...state.contacts];
            return {...state, contacts: newContact};
        case DELETE_CONTACT:
            const resultContact = state.contacts.filter(item=>item.id!==action.payload);
            return { ...state, contacts: resultContact };
        case SET_FILTER:
            return { ...state, filter: action.filter };
        default:
        return state;
    };
};
export default rootReducer;