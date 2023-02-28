import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const fetchContactsLoading = createAction("contacts/fetch/loading");
const fetchContactsSuccess = createAction("contacts/fetch/success");
const fetchContactsError = createAction("contacts/fetch/error");

const addContactsLoading = createAction("contact/add/loading");
const addContactsSuccess = createAction("contact/add/success");
const addContactsError = createAction("contact/add/error");

const deleteContactsLoading = createAction("contact/delete/loading");
const deleteContactsSuccess = createAction("contact/delete/success");
const deleteContactsError = createAction("contact/delete/error");

// export const addContact = createAction("contact/add", data => {
//     return {
//         payload: {
//             ...data,
//             id: nanoid(),
//         }
//     }
// });
// export const deleteContact = createAction("contact/delete");

const actions = {
    fetchContactsLoading,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsLoading,
    addContactsSuccess,
    addContactsError,
    deleteContactsLoading,
    deleteContactsSuccess,
    deleteContactsError,
}
export default actions;