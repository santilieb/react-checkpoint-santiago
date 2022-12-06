import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
function CartButton() {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">3</span>
    </button>
  );
}

export default CartButton;
