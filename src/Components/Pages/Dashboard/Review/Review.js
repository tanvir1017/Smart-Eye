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

const Review = () => {
  const { user, isLoading } = useAuth();

  const img = `https://i.ibb.co/3fbSzNr/download.png`;
  const initialInfo = {
    displayName: user.displayName,
    email: user.email,
    img: user.photoURL || img,
    review: "",
    rating: "",
  };
  const [review, setReview] = useState(initialInfo);
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
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks for your comment");
        }
        console.log(data);
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
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Name"
                    name="displayName"
                    defaultValue={user.displayName}
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="email"
                    label="email"
                    defaultValue={user.email}
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="img"
                    type="text"
                    label="img url"
                    defaultValue={user.photoURL ? user.photoURL : img}
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    name="rating"
                    label="Rate out of 5"
                    type="number"
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "50%", m: 1 }}
                    name="review"
                    label="your compliment"
                    type="text"
                    multiline
                    id="outlined-multiline-static"
                    rows={4}
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

export default Review;
