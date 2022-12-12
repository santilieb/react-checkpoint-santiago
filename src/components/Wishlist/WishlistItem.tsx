import { IItem } from "../../templates/interfaces";
import { useAppDispatch } from "../../store/hooks";
import { wishlistActions } from "../../store/wishlist-slice";
import { cartActions } from "../../store/cart-slice";

function CartItem(props: IItem) {
  const dispatch = useAppDispatch();
  const { id, title, price, image } = props;

  const removeItemFromWishlistHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
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

  return (
    <li className="">
      <header>
        <h3>{title}</h3>
      </header>
      <div className="">
        <div className="">
          <button onClick={removeItemFromWishlistHandler}>
            Remove from wishlist
          </button>
          <button onClick={addItemToCartHandler}>Add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
