import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, wishlistIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
      // Disables Background Scrolling whilst cart modal is open
      if (
        typeof window != "undefined" &&
        window.document &&
        state.cartIsVisible === true
      ) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
      // Disables Background Scrolling whilst wishlist the modal is open
      if (
        typeof window != "undefined" &&
        window.document &&
        state.wishlistIsVisible === true
      ) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
