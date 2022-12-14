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
    replaceWishlist(state) {
      const wishlist = localStorage.getItem("wishlist");
      if (wishlist) {
        const parsedWishlist = JSON.parse(wishlist);
        state.items = parsedWishlist.items;
        state.totalQuantity = parsedWishlist.totalQuantity;
      } else {
        state.items = [];
        state.totalQuantity = 0;
      }
    },
    addItemToWishlist(state, action: PayloadAction<IItem>) {
      if (typeof window !== "undefined") {
        const previousWishlist = localStorage.getItem("wishlist");
        console.log("previousWishlist", previousWishlist);
        let prevWishlistData: IWishlistState;
        if (previousWishlist) {
          prevWishlistData = JSON.parse(previousWishlist);
          state.items = prevWishlistData.items;
          state.totalQuantity = prevWishlistData.totalQuantity;
        }
      }
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity++;
        state.items.push(newItem);
      }

      if (typeof window !== "undefined") {
        const locallyStoredWishlist = {
          items: state.items,
          totalQuantity: state.totalQuantity,
        };
        localStorage.setItem("wishlist", JSON.stringify(locallyStoredWishlist));
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.items = state.items.filter((item) => item.id !== id);
      }

      if (typeof window !== "undefined") {
        const locallyStoredWishlist = {
          items: state.items,
          totalQuantity: state.totalQuantity,
        };
        localStorage.setItem("wishlist", JSON.stringify(locallyStoredWishlist));
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
