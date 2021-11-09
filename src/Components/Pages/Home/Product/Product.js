import React from "react";

const Product = (props) => {
  const { name } = props.item;
  return (
    <>
      <h2>name :{name}</h2>
    </>
  );
};

export default Product;
