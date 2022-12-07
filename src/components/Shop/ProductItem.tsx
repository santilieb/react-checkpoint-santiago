import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";

const ProductItem = (props: any) => {
  const dispatch = useAppDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = (amount: number) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name: title,
        price,
        quantity: amount,
        totalPrice: price * amount,
      })
    );
  };

  return (
    <li className="">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="">
          <button
            onClick={
              addToCartHandler.bind(null, 1)
              // the this keyword is not available in the bind method,
              // so we pass null as the first argument to the bind method, and then pass the second argument,
              // which is the amount of items to add to the cart (in this case, 1)
            }
          >
            Add to Cart
          </button>{" "}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
