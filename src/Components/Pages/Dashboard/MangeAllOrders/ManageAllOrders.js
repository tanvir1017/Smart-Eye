import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ManageAllOrder from "./ManageAllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState();
  const [number, setNumber] = useState(0);
  useEffect(() => {
    fetch("https://damp-dawn-73737.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllOrders(data);
      });
  }, []);
  return (
    <Container>
      <div className="products" style={{ marginBottom: "" }}>
        Manage orders
      </div>
      <Grid container spacing={2} sx={{ my: 5 }}>
        {allOrders?.map((allOrder) => (
          <ManageAllOrder
            key={allOrder._id}
            allOrder={allOrder}
            allOrders={allOrders}
            setAllOrders={setAllOrders}
            setNumber={setNumber}
            number={number}
          ></ManageAllOrder>
        ))}
      </Grid>
    </Container>
  );
};

export default ManageAllOrders;
