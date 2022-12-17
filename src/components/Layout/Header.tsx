import HeaderCartButton from "../Cart/HeaderCartButton";
import HeaderWishlistButton from "../Wishlist/HeaderWishlistButton";
import { uiActions } from "../../store/ui-slice";
import { useAppDispatch } from "../../store/hooks";

function Header() {
  const dispatch = useAppDispatch();

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">React Shop</h1>
      </div>
      <nav className="header__navigation">
        <HeaderWishlistButton />
        <HeaderCartButton />
      </nav>
    </header>
  );
}

export default Header;
