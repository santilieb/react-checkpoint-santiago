export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  totalPrice: number;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}
