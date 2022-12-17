import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import { useAppDispatch } from "../../store/hooks";
import { IItem } from "../../templates/interfaces";

const ProductItem = (props: IItem) => {
  const dispatch = useAppDispatch();
  const { id, title, image, price, isInWishlist } = props;

  const addToCartHandler = (amount: number) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: amount,
        totalItemPrice: price * amount,
      })
    );
  };

  const addToWishlistHandler = () => {
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        price,
        image,
      })
    );
  };

  const removeFromWishlistHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
  };

  return (
    <Card>
      <div className="card__image-container">
        <img className="card__image" src={image} alt={title} />
      </div>
      <div className="card__details">
        <h3 className="card__title">{title}</h3>
        <div className="card__price">${price.toFixed(2)}</div>
      </div>
      <div className="card__buttons">
        <button
          onClick={
            addToCartHandler.bind(null, 1)
            // we pass null as the first argument to the bind method (this keyword), and then pass the second argument
            // which is the amount of items to add to the cart (in this case, 1)
          }
        >
          Add to Cart
        </button>
        {/* //!Delete this span */}
        <span> </span>
        {/* //!Delete this span */}
        {isInWishlist ? (
          <button onClick={removeFromWishlistHandler}>
            Remove from Wishlist
          </button>
        ) : (
          <button onClick={addToWishlistHandler}>Add to Wishlist</button>
        )}
      </div>
    </Card>
  );
};

export default ProductItem;
