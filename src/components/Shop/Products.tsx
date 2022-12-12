import ProductItem from "./ProductItem";
import { IItem } from "../../templates/interfaces";
// import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  const { response, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products"
  ); // destructuring the response, error and isLoading from useFetch hook result

  return (
    <section className="products">
      <h2 className="heading-secondary">Buy your favorite products</h2>
      <ul className="card-container">
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {response.map((product: IItem) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
