import CartItem from "./CartItem";
import { ICartItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cartItems.map((item: ICartItem) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
