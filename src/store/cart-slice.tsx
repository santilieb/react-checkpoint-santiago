import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { CartItem, CartState } from "../templates/interfaces";

const initialState: CartState = {
  items: [] as CartItem[],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItem) {
        // state.items.push({
        // itemId: newItem.id
        // name: newItem.name,
        // price: newItem.price,
        // quantity: 1,
        // totalPrice: newItem.price,
        // });
      } else {
        // existingItem.quantity++;
        // existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
