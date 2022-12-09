export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
