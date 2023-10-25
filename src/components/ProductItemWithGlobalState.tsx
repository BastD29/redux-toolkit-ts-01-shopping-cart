import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/Product";
import { cartActions } from "../store/cart";
import { RootStateType } from "../store/configureStore";

interface ProductItemProps {
  product: Product;
}

const ProductItemWithGlobalState: React.FC<ProductItemProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  const quantity = useSelector(
    (state: RootStateType) =>
      state.cart.items.find((item) => item.id === product.id)?.quantity || 0
  );

  console.log("quantity", quantity);

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(cartActions.addItem({ ...product, quantity }));
    }
  };

  // const [quantity, setQuantity] = useState<number>(0);

  // const handleAddToCart = () => {
  //   if (quantity > 0) {
  //     dispatch(cartActions.addItem({ ...product, quantity }));
  //   }
  // };

  // return (
  //   <div>
  //     <p>{product.name}</p>
  //     <p>${product.price}</p>
  //     <div>
  //       <button onClick={() => setQuantity((q) => Math.max(0, q - 1))}>
  //         -
  //       </button>
  //       <span>{quantity}</span>
  //       <button onClick={() => setQuantity((q) => q + 1)}>+</button>
  //     </div>
  //     <button onClick={handleAddToCart}>Add to Cart</button>
  //   </div>
  // );

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <div>
        <button
          onClick={() => dispatch(cartActions.decrementQuantity(product.id))}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => dispatch(cartActions.incrementQuantity(product.id))}
        >
          +
        </button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItemWithGlobalState;
