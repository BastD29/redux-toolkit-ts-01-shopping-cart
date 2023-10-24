import { useSelector } from "react-redux";
import { RootStateType } from "../store/configureStore";

export default function ItemsInCart() {
  const cartItems = useSelector((state: RootStateType) => state.cart.items);
  console.log("cart items", cartItems);

  // prettier-ignore
  const itemsTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
  // prettier-ignore
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Total: $
            {item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h3>Total items in cart: {itemsTotal}</h3>
      <h3>Total price: {totalPrice}</h3>
    </>
  );
}
