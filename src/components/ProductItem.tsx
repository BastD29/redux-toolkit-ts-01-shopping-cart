import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../models/Product";
import { cartActions } from "../store/cart";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(cartActions.addItem({ ...product, quantity }));
    }
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity((q) => Math.max(0, q - 1))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
