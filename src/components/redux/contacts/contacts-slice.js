import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contacts-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (store) => ({ ...store, isLoading: true, error: null }))
        .addCase(fetchContacts.fulfilled, (store, action) => ({ ...store, items: action.payload, isLoading: false }))
        .addCase(fetchContacts.rejected, (store, action) => ({ ...store, isLoading: false, error: action.payload }))
        .addCase(addContact.pending, (store)=>({...store, isLoading:true,error: null}))
        .addCase(addContact.fulfilled, (store, action)=>({...store,items:[action.payload, ...store.items], isLoading:false}))
        .addCase(addContact.rejected, (store, action) => ({ ...store, isLoading: false, error: action.payload }))
        .addCase(deleteContact.pending, (store)=>({...store, isLoading:true,error: null}))
        .addCase(deleteContact.fulfilled, (store, action)=>({...store,items:store.items.filter(item => item.id !== action.payload), isLoading:false}))
        .addCase(deleteContact.rejected, (store, action)=>({...store, isLoading:false,error: action.payload}))
      }

  // {
  //       [fetchContacts.pending]: (store) => ({ ...store, isLoading: true, error: null }),
  //       [fetchContacts.fulfilled]: (store, action) => ({ ...store, items: action.payload, isLoading: false }),
  //       [fetchContacts.rejected]: (store, action) => ({ ...store, isLoading: false, error: action.payload }),
        
  //       [addContact.pending]: (store)=>({...store, isLoading:true,error: null}),
  //       [addContact.fulfilled]: (store, action)=>({...store,items:[action.payload, ...store.items], isLoading:false}),
  //       [addContact.rejected]: (store, action) => ({ ...store, isLoading: false, error: action.payload }),
        
  //       [deleteContact.pending]: (store)=>({...store, isLoading:true,error: null}),
  //       [deleteContact.fulfilled]: (store, action)=>({...store,items:store.items.filter(item => item.id !== action.payload), isLoading:false}),
  //       [deleteContact.rejected]: (store, action)=>({...store, isLoading:false,error: action.payload}),
  //   }, 
});

export default contactsSlice.reducer;