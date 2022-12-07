import ProductItem from "./ProductItem";
import { ICartItem } from "../../templates/interfaces";
import { useEffect } from "react";

let DUMMY_PRODUCTS: ICartItem[] = [];
const Products = () => {
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        DUMMY_PRODUCTS = json;
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="">
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product: ICartItem) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
            description={product.description}
            quantity={product.quantity}
            totalPrice={product.totalPrice}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
