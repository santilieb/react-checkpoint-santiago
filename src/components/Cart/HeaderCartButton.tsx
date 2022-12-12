import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function HeaderCartButton() {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state: any) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <br />
      <span className="badge">{cartQuantity}</span>
    </button>
  );
}

export default HeaderCartButton;
