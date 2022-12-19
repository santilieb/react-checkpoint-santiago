import ProductItem from "./ProductItem";
import { IItem } from "../../templates/interfaces";
import useFetch from "../../hooks/useFetch";
import { useAppSelector } from "../../store/hooks";
import Filter from "./Filter";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

const Products = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const category = useAppSelector((state) => state.filter.category);

  const { response, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products/`
  ); // destructuring the response, error and isLoading from useFetch hook result

  //filter the items based on the category
  const filteredItems = response.filter((item: IItem) => {
    if (category === "") {
      return response;
    }
    if (item.category === category) {
      return true;
    }
    return false;
  });

  return (
    <section className="products">
      <header className="products__heading">
        <h2 className="heading-secondary">New Arrivals</h2>
        <span>{filteredItems.length} items</span>
      </header>
      <Filter />
      <ul className="card-container">
        {isLoading && <Loading />}
        {!isLoading && error && <Error message={error} />}
        {!isLoading &&
          !error &&
          filteredItems.map((product: IItem) => {
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
