import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { IItem, IWishlistState } from "../templates/interfaces";

const initialState: IWishlistState = {
  items: [] as IItem[],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action: PayloadAction<IItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity++;
        state.items.push(newItem);
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
