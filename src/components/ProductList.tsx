import React from "react";

import { products } from "../data/product";
import ProductItemWithLocalState from "./ProductItemWithLocalState";
// import ProductItemWithGlobalState from "./ProductItemWithGlobalState";

const ProductList: React.FC = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItemWithLocalState key={product.id} product={product} />
        // <ProductItemWithGlobalState key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
