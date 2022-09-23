import React from "react";
import ProductCart from "./ProductCart";

const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCart item={item} key={item.id} />
      ))}
    </>
  );
};

export default ProductList;
