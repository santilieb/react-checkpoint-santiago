import { uiActions } from "../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IconShoppingBag } from "../../img/sprite";

function HeaderCartButton() {
  const dispatch = useAppDispatch();
  const cartQuantity: number = useAppSelector(
    (state) => state.cart.totalCartQuantity
  );
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button
      className={`header__btn header__btn--cart ${
        cartQuantity !== 0 ? "header__btn--cart-active" : ""
      }`}
      onClick={toggleCartHandler}
    >
      <IconShoppingBag />
      <span className="badge">{cartQuantity !== 0 ? cartQuantity : ""}</span>
    </button>
  );
}

export default HeaderCartButton;
