import WishlistItem from "./WishlistItem";
import { IItem } from "../../templates/interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "../UI/Modal";

function Wishlist() {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  return (
    <Modal>
      <h1 style={{ color: "red" }}>Your Wishlist</h1>
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
    </Modal>
  );
}

export default Wishlist;
