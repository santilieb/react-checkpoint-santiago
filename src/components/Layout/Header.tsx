import HeaderCartButton from "../Cart/HeaderCartButton";
import HeaderWishlistButton from "../Wishlist/HeaderWishlistButton";

function Header() {
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
