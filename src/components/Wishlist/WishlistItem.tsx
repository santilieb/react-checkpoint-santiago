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
        totalItemPrice: price,
      })
    );
  };

  return (
    <li className="cart-item">
      <div className="cart-item__main-content">
        <div className="cart-item__image-container">
          <img src={image} className="image-container__image" alt={title} />
        </div>
        <div className="cart-item__right-side-container">
          <header className="cart-item-header">
            <h3>{title}</h3>
            <div className="cart-item-header__price">${price.toFixed(2)}</div>
          </header>
          <div className="cart-item__buttons-container">
            <button onClick={removeItemFromWishlistHandler}>
              Remove from wishlist
            </button>
            <button onClick={addItemToCartHandler}>Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
