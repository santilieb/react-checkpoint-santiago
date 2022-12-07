import HeaderCartButton from "../Cart/HeaderCartButton";

function Header() {
  return (
    <header className="header">
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li>
            <HeaderCartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
