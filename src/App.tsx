import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import { useSelector } from "react-redux";
import Products from "./components/Shop/Products";
import "./sass/main.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { cartActions } from "./store/cart-slice";
import { wishlistActions } from "./store/wishlist-slice";

function App() {
  const dispatch = useAppDispatch();
  const cartIsVisible = useSelector((state: any) => state.ui.cartIsVisible);
  const wishlistIsVisible = useSelector(
    (state: any) => state.ui.wishlistIsVisible
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
