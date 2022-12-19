// interface for the items in the PLP and the Wishlist
export interface IItem {
  id: number;
  image: string;
  title: string;
  price: number;
  isInWishlist?: boolean;
  category?: string;
}

//interface for the Cart items that extends IItem to add quantity and totalPrice
export interface ICartItem extends IItem {
  quantity: number;
  totalItemPrice: number;
}

export interface ICartState {
  items: ICartItem[];
  totalCartPrice: number;
  totalCartQuantity: number;
}

export interface IWishlistState {
  items: IItem[];
  totalQuantity: number;
}
