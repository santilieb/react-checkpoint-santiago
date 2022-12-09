import { ICartItem } from "../../templates/interfaces";
import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cart-slice";

function CartItem(props: ICartItem) {
  const dispatch = useAppDispatch();
  const { id, title, price, quantity, totalPrice } = props;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        quantity: 1,
        totalPrice: price,
      })
    );
  };

  return (
    <li className="">
      <header>
        <h3>{title}</h3>
        <div className="">
          ${totalPrice.toFixed(2)}{" "}
          <span className="">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="">
        <div className="">
          x <span>{quantity}</span>
        </div>
        <div className="">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
