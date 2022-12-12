import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import { useSelector } from "react-redux";
import Products from "./components/Shop/Products";
import "./sass/main.scss";

function App() {
  const cartIsVisible = useSelector((state: any) => state.ui.cartIsVisible);
  const wishlistIsVisible = useSelector(
    (state: any) => state.ui.wishlistIsVisible
  );
  return (
    <div className="App">
      <Layout>
        {cartIsVisible && <Cart />}
        {wishlistIsVisible && <Wishlist />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
