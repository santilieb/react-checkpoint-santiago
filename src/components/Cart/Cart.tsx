import CartItem from "./CartItem";
import { ICartItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "../UI/Modal";
import { cartActions } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";
import { IconCross } from "../../img/sprite";

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartQuantity = useAppSelector((state) => state.cart.totalCartQuantity);
  const cartPrice = useAppSelector((state) => state.cart.totalCartPrice);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Modal>
      <header className="cart-header">
        <h1>Your Bag ({cartQuantity})</h1>
        {/* close button */}
        <div className="cart-header__right-side">
          <button
            className="cart-header__clear-button"
            onClick={clearCartHandler}
          >
            clear bag
          </button>
          <button
            className="cart-header__close-button"
            onClick={toggleCartHandler}
          >
            <IconCross />
          </button>
        </div>
      </header>

      <ul className="cart-items">
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
      <div className="cart-order-summary">
        <h2 className="cart-order-summary__title">Order Summary</h2>
        <div className="cart-order-summary__total">
          <span>Total: </span>
          <span className="cart-order-summary__total-price">
            ${cartPrice < 0 ? "0.00" : cartPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
