import React from "react";
import ProductCart from "./ProductCart";

const ProductList = ({ data,layout }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCart item={item} key={item.id} layout={layout}/>
      ))}
    </>
  );
};

export default ProductList;
