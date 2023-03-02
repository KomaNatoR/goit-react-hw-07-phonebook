import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "components/shared/API/contacts-api";

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