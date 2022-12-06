function CartItem(props: any) {
  const { id, name, price, quantity } = props.item;

  return (
    <div className="cart-item">
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__price">{price}</div>
      <div className="cart-item__quantity">{quantity}</div>
      <div className="cart-item__remove">
        <button onClick={() => props.onRemove(id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
