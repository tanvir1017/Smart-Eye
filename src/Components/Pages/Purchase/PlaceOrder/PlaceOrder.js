import {
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import "../../Home/Home/Local.css";

const PlaceOrder = ({ product }) => {
  const { user, isLoading } = useAuth();
  const { name, img, price, Availability, rating } = product;
  const [purchase, setPurchase] = useState({
    displayName: user.displayName,
    email: user.email,
    name: "",
    img: "",
    price: "",
    status: false,
  });
  const HandleLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...purchase };
    newLoginData[field] = value;
    setPurchase(newLoginData);
  };
  const handleLoad = (e) => {
    e.preventDefault();
    const placeProduct = {
      ...purchase,
      name,
      img,
      price,
      Availability,
      rating,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your orderd placed");
        }
      });
  };
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ m: "auto" }} className="form bg-light">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Place your order
          </Typography>
          {!isLoading && (
            <Box>
              <Grid>
                {product.name && (
                  <form onSubmit={handleLoad}>
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="standard-basic"
                      label="Name"
                      name="displayName"
                      defaultValue={user.displayName}
                      onBlur={HandleLogin}
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      id="standard-basic"
                      name="email"
                      label="email"
                      defaultValue={user.email}
                      onBlur={HandleLogin}
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "100%", m: 1 }}
                      name="adress"
                      label="adress"
                      type="text"
                      multiline
                      id="outlined-multiline-static"
                      rows={4}
                      required
                      onBlur={HandleLogin}
                      variant="standard"
                    />
                    <br />{" "}
                    <button
                      type="submit"
                      className="common-btn loginbtn shadow-lg"
                    >
                      Send
                    </button>
                    <br />{" "}
                  </form>
                )}
              </Grid>
            </Box>
          )}
          {isLoading && (
            <Grid item xs={12} md={6} sx={{ m: "auto" }}>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlaceOrder;
