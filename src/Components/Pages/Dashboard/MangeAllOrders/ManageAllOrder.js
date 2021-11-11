import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Rating from "react-rating";

const ManageAllOrder = ({
  allOrder,
  setAllOrders,
  allOrders,
  number,
  setNumber,
}) => {
  const {
    img,
    name,
    price,
    Availability,
    rating,
    displayName,
    email,
    adress,
    status,
    _id,
  } = allOrder;
  const handleDelete = (id) => {
    const proccessed = window.confirm("Are really wants to delete");
    if (proccessed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Product has been deleted");
            const reamaining = allOrders.filter((mycart) => mycart._id !== id);
            setAllOrders(reamaining);
          }
          console.log(data);
        });
    }
  };
  const [loading, isLoading] = useState(false);
  const HandelApproved = (e) => {
    const checked = e.target.checked;

    fetch("http://localhost:5000/orders", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id, checked }),
    })
      .then((res) => res.json())
      .then((data) => {
        isLoading(!loading);
      });
  };
  return (
    <Grid xs={12} md={3} sm={6}>
      <Paper className="text-muted p-2 m-2" elevation={4}>
        <Box className="">
          <img
            style={{
              width: "50%",
            }}
            src={img}
            alt=""
          />
          <Box>
            <Typography
              variant="body2"
              style={{ fontSize: "12px", marginTop: "2px" }}
            >
              {Availability}{" "}
              <span style={{ color: "#fa8b6e", fontSize: "12px" }}>
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                ></Rating>
              </span>
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fa8b6e", fontSize: "15px", fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              className="text-muted"
              variant="body2"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              $ {price}
            </Typography>
            <Divider />
            <Box className="text-start">
              <Typography
                className="text-muted "
                variant="body2"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <i className="fas fa-user me-2 mt-1"></i> {displayName}
              </Typography>
              <Typography
                className="text-muted "
                variant="body2"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <i class="fas fa-envelope me-2 mt-1"></i>
                {email}
              </Typography>
              <Typography
                className="text-muted "
                variant="body2"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              >
                <i class="fas fa-map-marker-alt me-2 mt-1"></i>
                {adress}
              </Typography>
              <Box className="d-flex mt-2 px-1  justify-content-between">
                <span
                  onClick={() => handleDelete(allOrder._id)}
                  style={{
                    background: "rgb(242 174 156)",
                    padding: "0px 16px",
                    color: "#630f00",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  cancel
                </span>
                <input
                  onChange={HandelApproved}
                  className="form-check-input ms-1"
                  type="checkbox"
                />
                <span
                  style={{
                    background: "rgb(122 246 166)",
                    padding: "0px 16px",
                    color: "rgb(31 91 15)",
                    borderRadius: "30px",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  {status ? "shipped" : "pending"}
                </span>
              </Box>
            </Box>
            <br />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ManageAllOrder;
