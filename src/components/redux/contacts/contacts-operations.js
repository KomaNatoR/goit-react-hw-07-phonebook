import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "components/shared/API/contacts-api";
// import actions from "./contacts-actions";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async (data, thunkAPI) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (id, thunkAPI) => {
        try {
            await api.deleteContact(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    }
);

// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.fetchContactsLoading());
//             const data = await api.getContacts();
//             dispatch(actions.fetchContactsSuccess(data));
//         } catch (error) {
//             dispatch(actions.fetchContactsError(error.message));
//         }
//     };
//     return func;
// };

// export const addContact = (data) => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.addContactsLoading());
//             const result = await api.addContact(data);
//             // console.log(result);
//             dispatch(actions.addContactsSuccess(result));
//         } catch (error) {
//             dispatch(actions.addContactsError(error.message));
//         }
//     };
//     return func;
// };

// export const deleteContact = (id) => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.deleteContactsLoading());
//             await api.deleteContact(id);
//             dispatch(actions.deleteContactsSuccess(id));
//         } catch (error) {
//             dispatch(actions.deleteContactsError(error.message));
//         }
//     };
//     return func;
// };