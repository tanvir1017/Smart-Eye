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

const AddAProduct = () => {
  const { user, isLoading } = useAuth();
  //   const initialInfo = {
  //     displayName: user.displayName,
  //     email: user.email,
  //     img: user.photoURL || img,
  //     review: "",
  //     rating: "",
  //   };
  const [review, setReview] = useState({});
  const HandleLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...review };
    newLoginData[field] = value;
    setReview(newLoginData);
    console.log(newLoginData);
  };
  const handleLoad = (e) => {
    const userReview = { ...review };
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product added");
        }
        console.log(data);
      });
  };
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ m: "auto" }} className="form bg-light">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Add Product
          </Typography>
          {!isLoading && (
            <Box>
              <Grid>
                <form onSubmit={handleLoad}>
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Name"
                    name="displayName"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="price"
                    label="Price"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="off"
                    label="Discount"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="Availability"
                    label="Availability"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="img"
                    label="img url"
                    required
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="rating"
                    label="Rate out of 5"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des1"
                    label="Description 1"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des2"
                    label="Description 2"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des3"
                    label="Description 3"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des4"
                    label="Description 4"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des5"
                    label="Description 5"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des6"
                    label="Description 6"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des7"
                    label="Description 7"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des8"
                    label="Description 8"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des9"
                    label="Description 9"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="des10"
                    label="Description 10"
                    onBlur={HandleLogin}
                    variant="standard"
                    required
                  />
                  <br />{" "}
                  <button
                    type="submit"
                    className="common-btn loginbtn shadow-lg"
                  >
                    Add
                  </button>
                  <br />{" "}
                  {/* <Box className="mt-3">
                    {user.email && (
                      <Alert severity="success" className="rounded">
                        Successfuly loged in
                      </Alert>
                    )}
                    {error && <Alert severity="error">{error} </Alert>}
                  </Box> */}
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

export default AddAProduct;
