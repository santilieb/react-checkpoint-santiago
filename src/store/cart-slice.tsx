import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { ICartItem, ICartState } from "../templates/interfaces";

const initialState: ICartState = {
  items: [] as ICartItem[],
  totalCartPrice: 0,
  totalCartQuantity: 0,
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
        state.totalCartPrice = parsedCart.totalCartPrice;
        state.totalCartQuantity = parsedCart.totalCartQuantity;
      } else {
        state.items = [];
        state.totalCartPrice = 0;
        state.totalCartQuantity = 0;
      }
    },
    addItemToCart(state, action: PayloadAction<ICartItem>) {
      if (typeof window !== "undefined") {
        const previousCart = localStorage.getItem("cart");
        let prevCartData: ICartState;
        if (previousCart) {
          prevCartData = JSON.parse(previousCart);
          state.items = prevCartData.items;
          state.totalCartPrice = prevCartData.totalCartPrice;
          state.totalCartQuantity = prevCartData.totalCartQuantity;
        }
      }
      const newItem = action.payload; // the item to be added to the cart
      const existingItem = state.items.find((item) => item.id === newItem.id); // check if the item is already in the cart
      state.totalCartQuantity++; // increment the total quantity of items in the cart by 1
      if (!existingItem) {
        // if the item is not already in the cart, add it to the cart
        state.items.push(newItem);
      } else {
        // if the item is already in the cart, increment both the quantity and total price of the item
        existingItem.quantity += newItem.quantity;
        existingItem.totalItemPrice += newItem.totalItemPrice;
      }
      // map the totalItemPrice and quantity of each item in the cart
      const totalPrice = state.items.map(
        (product: ICartItem) => product.totalItemPrice
      );
      const totalQuantity = state.items.map(
        (product: ICartItem) => product.quantity
      );

      // reduce the totalItemPrice and quantity of each item in the cart to get the total price and quantity of the cart
      const reducedTotalPrice = totalPrice.reduce(
        (prev: number, curr: number) => prev + curr
      );
      const reducedTotalQuantity = totalQuantity.reduce(
        (prev: number, curr: number) => prev + curr
      );

      // update the state with the new total cart price and quantity
      state.totalCartPrice = reducedTotalPrice;
      state.totalCartQuantity = reducedTotalQuantity;

      if (typeof window !== "undefined") {
        const locallyStoredCart: ICartState = {
          items: state.items,
          totalCartPrice: state.totalCartPrice,
          totalCartQuantity: state.totalCartQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalCartQuantity--;

      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // remove the item from the cart
        state.totalCartPrice -= existingItem.price; // reduce the total cart price by the price of the item
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalItemPrice -= existingItem.price;
        state.totalCartPrice -= existingItem.price;
      }
      // once the item is removed, update the local storage
      if (typeof window !== "undefined") {
        const locallyStoredCart: ICartState = {
          items: state.items,
          totalCartPrice: state.totalCartPrice,
          totalCartQuantity: state.totalCartQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
    },
    removeArticleFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalCartQuantity -= existingItem.quantity;
        state.totalCartPrice -= existingItem.totalItemPrice;
      }
      // once the article is removed, update the local storage
      if (typeof window !== "undefined") {
        const locallyStoredCart: ICartState = {
          items: state.items,
          totalCartPrice: state.totalCartPrice,
          totalCartQuantity: state.totalCartQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(locallyStoredCart));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalCartPrice = 0;
      state.totalCartQuantity = 0;
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
