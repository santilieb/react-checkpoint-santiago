import ProductItem from "./ProductItem";
import { IItem } from "../../templates/interfaces";
// import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useAppSelector } from "../../store/hooks";

const Products = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const { response, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products"
  ); // destructuring the response, error and isLoading from useFetch hook result

  return (
    <section className="products">
      <div className="products__heading">
        <h2 className="heading-secondary">New Arrivals</h2>
      </div>
      <ul className="card-container">
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {response.map((product: IItem) => {
          const isInWishlist = wishlistItems.some((item) => {
            if (item.id === product.id) {
              return true;
            }
            return false;
          });

          return (
            <ProductItem
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              isInWishlist={isInWishlist}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
