import WishlistItem from "./WishlistItem";
import { IItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "../UI/Modal";
import { uiActions } from "../../store/ui-slice";
import { useAppDispatch } from "../../store/hooks";
import { IconCross } from "../../img/sprite";

function Wishlist() {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const wishlistQuantity = useAppSelector(
    (state) => state.wishlist.totalQuantity
  );

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <Modal>
      <header className="cart-header">
        <h1>Your Wishlist ({wishlistQuantity})</h1>
        <button
          className="cart-header__close-button"
          onClick={toggleWishlistHandler}
        >
          <IconCross />
        </button>
      </header>

      <ul className="cart-items">
        {wishlistItems.map((item: IItem) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </ul>
    </Modal>
  );
}

export default Wishlist;
