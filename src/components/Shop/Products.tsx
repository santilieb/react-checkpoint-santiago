import ProductItem from "./ProductItem";
import { IProduct } from "../../templates/interfaces";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="">
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
