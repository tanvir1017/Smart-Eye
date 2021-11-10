import React from "react";

const Orders = ({ order }) => {
  const { img, ProductName } = order;
  return (
    <div>
      <div className="col">
        <img src={img} alt="" />
        <div>
          <p>{ProductName}</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
