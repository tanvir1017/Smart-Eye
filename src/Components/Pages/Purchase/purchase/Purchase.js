import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import Navigation from "../../Shared/Navigation/Navigation";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://damp-dawn-73737.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const {
    name,
    img,
    rating,
    price,
    off,
    Availability,
    des1,
    des2,
    des3,
    des4,
    des5,
    des6,
    des7,
    des8,
    des9,
    des10,
  } = product;

  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <div className="row ">
          <div className="col-md-5 col-lg-5 col-sm-12 m-auto">
            <img style={{ width: "100%" }} src={img} alt="" />
            <h6 style={{ fontWeight: "bold", color: "#fd45f42" }}>{name}</h6>
            <h5 style={{ fontSize: "25px" }}>
              <span>$ {price}</span>{" "}
              <span className="text-decoration-line-through text-muted">
                ${off}
              </span>
            </h5>
            <h4 style={{ fontSize: "18px" }} className="text-muted">
              Availability : {Availability}
            </h4>
            <p style={{ fontWeight: "bold", color: "#fa8b6e" }}>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </p>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-12 ">
            <PlaceOrder product={product}></PlaceOrder>
          </div>
        </div>

        <div className="m-auto">
          <div className="row ">
            <div className="col-md-2 col-lg-2"></div>
            <div className="col-md-8 col-sm-12 col-lg-8">
              <ul class="bg-light list-group list-group-flush my-4 text-start">
                <li class="alert alert-danger fs-3">Product Details</li>
                <li class="list-group-item text-muted border-start">
                  01 ,{des1}
                </li>
                <li class="list-group-item text-muted border-end ">
                  02, {des2}
                </li>
                <li class="list-group-item text-muted border-start ">
                  03, {des3}
                </li>
                <li class="list-group-item text-muted border-end ">
                  04, {des4}
                </li>
                <li class="list-group-item text-muted border-start ">
                  05, {des5}
                </li>
                <li class="list-group-item text-muted border-end ">
                  06, {des6}
                </li>
                <li class="list-group-item text-muted border-start ">
                  07, {des7}
                </li>
                <li class="list-group-item text-muted border-end ">
                  08, {des8}
                </li>
                <li class="list-group-item text-muted border-start  ">
                  09, {des9}
                </li>
                <li class="list-group-item text-muted border-end  ">
                  10, {des10}
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
