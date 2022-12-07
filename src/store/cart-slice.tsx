import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { ICartItem, ICartState } from "../templates/interfaces";

const initialState: ICartState = {
  items: [] as ICartItem[],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
      }
      const totalPrice = state.items.map((product: ICartItem) => product.price);
      const totalQuantity = state.items.map(
        (product: ICartItem) => product.quantity
      );

      const reducedTotalPrice = totalPrice.reduce(
        (prev: number, curr: number) => prev + curr
      );
      const reducedTotalQuantity = totalQuantity.reduce(
        (prev: number, curr: number) => prev + curr
      );

      state.totalPrice = reducedTotalPrice;
      state.totalQuantity = reducedTotalQuantity;
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
