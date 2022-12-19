import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
