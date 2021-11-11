import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Orders from "./Orders";

const MyOrders = () => {
  const { user } = useAuth();
  console.log(user.email);
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    fetch(`https://damp-dawn-73737.herokuapp.com/email?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
  return (
    <>
      {" "}
      <Container>
        <div className="products" style={{ marginBottom: "" }}>
          My Orders
        </div>
        <Grid container spacing={2} sx={{ my: 5 }}>
          {myOrders?.map((order) => (
            <Orders
              key={order._id}
              setMyOrders={setMyOrders}
              myOrders={myOrders}
              order={order}
            ></Orders>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MyOrders;
