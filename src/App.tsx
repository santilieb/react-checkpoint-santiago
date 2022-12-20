import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Products from "./components/Shop/Products";
import "./sass/main.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { cartActions } from "./store/cart-slice";
import { wishlistActions } from "./store/wishlist-slice";
import { useAppSelector } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const cartIsVisible: boolean = useAppSelector(
    (state) => state.ui.cartIsVisible
  );
  const wishlistIsVisible: boolean = useAppSelector(
    (state) => state.ui.wishlistIsVisible
  );
  useEffect(() => {
    //load the cart and wishlist from the local storage
    const getLocalStorageData = () => {
      dispatch(cartActions.replaceCart());
      dispatch(wishlistActions.replaceWishlist());
    };
    getLocalStorageData();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="App">
      <Layout>
        {cartIsVisible && <Cart />}
        {wishlistIsVisible && <Wishlist />}
        <Products />
      </Layout>
    </main>
  );
}

export default App;
