import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (_, {payload}) => payload,
    }
});
export default filterSlice.reducer;
export const {setFilter} = filterSlice.actions;