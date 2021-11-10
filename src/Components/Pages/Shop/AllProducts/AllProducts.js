import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Shop from "../Shop/Shop";

const AllProducts = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row row-cols-md-3 row-cols-sm-1 row-cols-lg-4">
          {items?.map((item) => (
            <Shop item={item}></Shop>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
