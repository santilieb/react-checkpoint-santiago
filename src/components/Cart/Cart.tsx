import CartItem from "./CartItem";
import { ICartItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "../UI/Modal";
import { cartActions } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Modal>
      <h1 style={{ color: "blue" }}>Your Shopping Cart</h1>
      <button onClick={clearCartHandler}>Clear Cart</button>
      <ul>
        {cartItems.map((item: ICartItem) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            totalItemPrice={item.totalItemPrice}
          />
        ))}
      </ul>
    </Modal>
  );
}

export default Cart;
