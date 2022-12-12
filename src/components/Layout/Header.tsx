import HeaderCartButton from "../Cart/HeaderCartButton";
import HeaderWishlistButton from "../Wishlist/HeaderWishlistButton";

function Header() {
  return (
    <header className="header">
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li>
            <HeaderCartButton />
            <br />
            <br />
            <HeaderWishlistButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
