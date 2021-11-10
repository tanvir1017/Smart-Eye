import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ item }) => {
  const { name, price, img, off, Availability, _id } = item;
  return (
    <div>
      <div className="col">
        <div className="forItem">
          <img src={img} alt="" />
          <div className="itemDetails" style={{ marginTop: "-2%" }}>
            <span style={{ color: "#fa8b6e", fontSize: "12px" }}>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            <p className="product-name">{name}</p>
            <h5 style={{ fontSize: "20px" }}>
              <span>${price}</span>{" "}
              <span className="text-decoration-line-through text-muted">
                ${off}
              </span>
            </h5>
            <h6 style={{ fontSize: "16px" }} className="text-muted">
              <span>{Availability}</span>{" "}
            </h6>
            <Link to={`/purchase/${_id}`}>
              {" "}
              <button className="loginbtn mt-2">Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
