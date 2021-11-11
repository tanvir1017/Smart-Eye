import React from "react";
import Rating from "react-rating";

const ManageProduct = ({ product, setProducts, products }) => {
  const { img, name, Availability, rating, price, off } = product;
  const handleDelete = (id) => {
    const proccessed = window.confirm("are you really wants to delete ?");
    if (proccessed) {
      const url = `https://damp-dawn-73737.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Product deleted");
            const reamaining = products.filter((product) => product._id !== id);
            setProducts(reamaining);
          }
        });
    }
  };
  return (
    <div className="container">
      {" "}
      <div className="col">
        <div className="forItem">
          <img className="img-fluid" src={img} alt="" />
          <div className="itemDetails" style={{ marginTop: "-2%" }}>
            <span style={{ color: "#fa8b6e", fontSize: "12px" }}>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
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
            <button
              onClick={() => handleDelete(product._id)}
              className="loginbtn mt-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
