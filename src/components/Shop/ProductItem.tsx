import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import { useAppDispatch } from "../../store/hooks";
import { IItem } from "../../templates/interfaces";
import { IconHeart } from "../../img/sprite";

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
        <figure className="card__image-wrapper">
          <img className="card__image" src={image} alt={title} />
        </figure>
      </div>
      <div className="card__details">
        <h3 className="card__title">{title}</h3>
        <div className="card__price">${price.toFixed(2)}</div>
      </div>
      <div className="card__buttons">
        <button
          className="card__btn card__btn-bag"
          onClick={
            addToCartHandler.bind(null, 1)
            // we pass null as the first argument to the bind method (this keyword), and then pass the second argument
            // which is the amount of items to add to the cart (in this case, 1)
          }
        >
          ADD TO BAG
        </button>
        <button
          className={`card__btn card__btn-wishlist card__btn-wishlist--${
            isInWishlist ? "active" : "inactive"
          }`}
          onClick={
            isInWishlist ? removeFromWishlistHandler : addToWishlistHandler
          }
        >
          <IconHeart />
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
