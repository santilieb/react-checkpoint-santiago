import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function CartButton() {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state: any) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
}

export default CartButton;
