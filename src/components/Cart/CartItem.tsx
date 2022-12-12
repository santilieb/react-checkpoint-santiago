import { ICartItem } from "../../templates/interfaces";
import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cart-slice";

function CartItem(props: ICartItem) {
  const dispatch = useAppDispatch();
  const { id, title, price, quantity, image, totalPrice } = props;

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
      })
    );
  };

  const removeArticleCartHandler = () => {
    dispatch(cartActions.removeArticleFromCart(id));
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
          <button onClick={removeItemFromCartHandler}>- remove 1 </button>
          <br />
          <button onClick={addItemToCartHandler}>+ add 1</button>
          <br />
          <button onClick={removeArticleCartHandler}>Remove</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
