import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, wishlistIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
