import WishlistItem from "./WishlistItem";
import { IItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "../UI/Modal";
import { uiActions } from "../../store/ui-slice";
import { useAppDispatch } from "../../store/hooks";

function Wishlist() {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <Modal>
      <h1>Your Wishlist ({wishlistItems.length})</h1>
      <ul>
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

      {/* close button */}
      <button onClick={toggleWishlistHandler}>Close Wishlist</button>
    </Modal>
  );
}

export default Wishlist;
