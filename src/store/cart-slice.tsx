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
    // Check if cart exists in local storage
    // If it does, set the state to the cart in local storage
    // If it doesn't, set the state to the initial state
    // This is called when the App loads
    replaceCart(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const parsedCart = JSON.parse(cart);
        state.items = parsedCart.items;
        state.totalPrice = parsedCart.totalPrice;
        state.totalQuantity = parsedCart.totalQuantity;
      } else {
        state.items = [];
        state.totalPrice = 0;
        state.totalQuantity = 0;
      }
    },
    addItemToCart(state, action: PayloadAction<ICartItem>) {
      if (typeof window !== "undefined") {
        const previousCart = localStorage.getItem("cart");
        let prevCartData: ICartState;
        if (previousCart) {
          prevCartData = JSON.parse(previousCart);
          state.items = prevCartData.items;
          state.totalPrice = prevCartData.totalPrice;
          state.totalQuantity = prevCartData.totalQuantity;
        }
      }
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

      if (typeof window !== "undefined") {
        const locallyStoredCart = {
          items: state.items,
          totalPrice: state.totalPrice,
          totalQuantity: state.totalQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
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
      // once the item is removed, update the local storage
      if (typeof window !== "undefined") {
        const locallyStoredCart = {
          items: state.items,
          totalPrice: state.totalPrice,
          totalQuantity: state.totalQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
    },
    removeArticleFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      // once the article is removed, update the local storage
      if (typeof window !== "undefined") {
        const locallyStoredCart = {
          items: state.items,
          totalPrice: state.totalPrice,
          totalQuantity: state.totalQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
