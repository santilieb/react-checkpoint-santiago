import CartButton from "../Cart/CartButton";

function Header() {
  return (
    <header className="header">
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
