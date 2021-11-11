import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Shop from "../Shop/Shop";

const AllProducts = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://damp-dawn-73737.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container mb-5 mt-2">
        <div className="products" style={{ marginBottom: "-6%" }}>
          Shop
        </div>
        <div className="row row-cols-md-3 row-cols-sm-1 row-cols-lg-4">
          {items?.map((item) => (
            <Shop item={item}></Shop>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
