export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}
