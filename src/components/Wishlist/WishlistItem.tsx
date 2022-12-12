import { IItem } from "../../templates/interfaces";
import { useAppDispatch } from "../../store/hooks";
import { wishlistActions } from "../../store/wishlist-slice";

function CartItem(props: IItem) {
  const dispatch = useAppDispatch();
  const { id, title, price, image } = props;

  const removeItemHandler = () => {
    dispatch(wishlistActions.removeItemFromWishlist(id));
  };

  const addItemHandler = () => {
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        price,
        image,
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
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
