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

const PlaceOrder = ({ name }) => {
  const { user, isLoading } = useAuth();

  const img = `https://i.ibb.co/3fbSzNr/download.png`;
  const initialInfo = {
    displayName: user.displayName,
    email: user.email,
    img: user.photoURL || img,
    product: name,
  };
  const [purchase, setPurchase] = useState(initialInfo);
  const HandleLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...purchase };
    newLoginData[field] = value;
    setPurchase(newLoginData);
    console.log(newLoginData);
  };
  const handleLoad = (e) => {
    const placeProduct = { ...purchase };
    e.preventDefault();
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
            How was this product ?
          </Typography>
          {!isLoading && (
            <Box>
              <Grid>
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
                    id="standard-basic"
                    name="img"
                    type="text"
                    label="img url"
                    defaultValue={user.photoURL ? user.photoURL : img}
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <Box>
                    <Grid container spacing={1}>
                      <Grid xs={12} md={6}>
                        <TextField
                          sx={{ width: "90%", m: 1 }}
                          id="standard-basic"
                          name="ProductName"
                          label="Product name"
                          type="text"
                          defaultValue={name}
                          onBlur={HandleLogin}
                          variant="standard"
                        />
                      </Grid>
                      <Grid xs={12} md={6}>
                        <TextField
                          sx={{ width: "90%", m: 1 }}
                          id="standard-basic"
                          name="price"
                          label="Product Price"
                          type="text"
                          defaultValue={name}
                          onBlur={HandleLogin}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Box>
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
