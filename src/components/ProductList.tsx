import React from "react";
import ProductItem from "./ProductItem";
import { products } from "../data/product";

const ProductList: React.FC = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
