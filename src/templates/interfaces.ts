// interface for the items in the PLP and the Wishlist
export interface IItem {
  id: number;
  image: string;
  title: string;
  price: number;
  isInWishlist?: boolean;
}

//interface for the Cart items that extends IItem to add quantity and totalPrice
export interface ICartItem extends IItem {
  quantity: number;
  totalPrice: number;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}

export interface IWishlistState {
  items: IItem[];
  totalQuantity: number;
}
