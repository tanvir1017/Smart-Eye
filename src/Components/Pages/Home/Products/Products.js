import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [items, setItems] = useState([]);
  const size = 6;
  useEffect(() => {
    fetch(`https://damp-dawn-73737.herokuapp.com/products?size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="products" style={{ marginBottom: "-6%" }}>
        Products
      </div>
      <div className="row row-cols-md-3 row-cols-sm-1 row-cols-lg-4">
        {items?.map((item) => (
          <Product item={item}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
