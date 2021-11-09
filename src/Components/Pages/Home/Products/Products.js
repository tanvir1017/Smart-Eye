import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>founded : {items.length}</h2>
    </div>
  );
};

export default Products;
