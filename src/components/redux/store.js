import { configureStore } from "@reduxjs/toolkit";

// import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

import contactsSlice from "./contacts/contacts-slice";

const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterReducer,
    }
});
export default store;
// console.log(store.getState());