import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IconHeart } from "../../img/sprite";

function HeaderWishlistButton() {
  const dispatch = useAppDispatch();
  const wishlistQuantity: number = useAppSelector(
    (state) => state.wishlist.totalQuantity
  );

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button
      className={`header__btn header__btn--wishlist ${
        wishlistQuantity !== 0 ? "header__btn--wishlist-active" : ""
      }`}
      onClick={toggleWishlistHandler}
    >
      <IconHeart />
      <span className="badge">
        {wishlistQuantity !== 0 ? wishlistQuantity : ""}
      </span>
    </button>
  );
}

export default HeaderWishlistButton;
