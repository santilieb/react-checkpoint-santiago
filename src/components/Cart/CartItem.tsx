import { ICartItem } from "../../templates/interfaces";
import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";

function CartItem(props: ICartItem) {
  const dispatch = useAppDispatch();
  const { id, title, price, quantity, image, totalItemPrice } = props;

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemToWishlistHandler = () => {
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        price,
        image,
      })
    );
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

  const removeArticleCartHandler = () => {
    dispatch(cartActions.removeArticleFromCart(id));
  };

  return (
    <li className="cart-item">
      <h3 className="cart-item-header--small-screen">{title}</h3>
      <div className="cart-item__main-content">
        <div className="cart-item__image-container">
          <img src={image} className="image-container__image" alt={title} />
        </div>
        <div className="cart-item__right-side-container">
          <header className="cart-item-header">
            <h3 className="cart-item-header__title">{title}</h3>
            <div className="cart-item-header__quantity">
              Qty: <span>{quantity}</span>
            </div>
            <div className="cart-item-header__price">
              ${totalItemPrice.toFixed(2)}{" "}
              <span className="">(${price.toFixed(2)}/item)</span>
            </div>
          </header>
          <div className="cart-item__buttons-container">
            <button onClick={removeArticleCartHandler}>Remove</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
