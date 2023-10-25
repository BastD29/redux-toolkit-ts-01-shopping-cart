import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/configureStore";
import { cartActions } from "../store/cart";

export default function ItemsInCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootStateType) => state.cart.items);
  // console.log("cart items", cartItems);

  const itemsTotal = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDeleteItem = (id: string) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Total: $
            {item.quantity * item.price}{" "}
            <button onClick={() => handleDeleteItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
      <h3>Total items in cart: {itemsTotal}</h3>
      <h3>Total price: ${totalPrice}</h3>
    </>
  );
}
