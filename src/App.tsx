import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import Products from "./components/Shop/Products";

function App() {
  const cartIsVisible = useSelector((state: any) => state.ui.cartIsVisible);
  return (
    <div className="App">
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
