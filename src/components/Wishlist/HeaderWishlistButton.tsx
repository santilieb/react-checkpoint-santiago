import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function HeaderWishlistButton() {
  const dispatch = useAppDispatch();
  const wishlistQuantity = useAppSelector(
    (state: any) => state.wishlist.totalQuantity
  );
  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <button className="button" onClick={toggleWishlistHandler}>
      <span>My Wishlist</span>
      <br />
      <span className="badge">{wishlistQuantity}</span>
    </button>
  );
}

export default HeaderWishlistButton;
