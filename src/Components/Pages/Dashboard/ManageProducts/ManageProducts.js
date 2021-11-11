import React, { useEffect, useState } from "react";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container mb-4">
      <div className="products" style={{ marginBottom: "-3%" }}>
        All Products From Store
      </div>
      <div className="row row-cols-md-6 row-cols-sm-2 row-cols-lg-6">
        {products?.map((product) => (
          <ManageProduct
            key={product._id}
            products={products}
            setProducts={setProducts}
            product={product}
          ></ManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
