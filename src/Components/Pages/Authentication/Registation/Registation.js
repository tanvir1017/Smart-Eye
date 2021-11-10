import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const { register, isLoading, user, error } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const HandleLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    if (loginData.password !== loginData.Retype_password) {
      alert("passwore didn't match");
      return;
    }
    register(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: "60px" }}>
        <Grid container spacing={2}>
          {!isLoading && (
            <Grid
              item
              xs={12}
              md={8}
              sx={{ m: "auto" }}
              className="form bg-light"
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                Registation
              </Typography>
              <Grid>
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Name"
                    type="text"
                    name="name"
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    name="password"
                    type="password"
                    label="password"
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    name="Retype_password"
                    type="password"
                    label="Retype password"
                    onBlur={HandleLogin}
                    variant="standard"
                  />
                  <br />{" "}
                  <button type="submit" className="shadow-lg  loginbtn">
                    Sign up
                  </button>
                  <br />
                  <Typography
                    variant="caption text"
                    sx={{
                      marginTop: "15px",
                      display: "inherit",
                      fontStyle: "italic",
                    }}
                  >
                    Already have an account ? <Link to="/login">Log in</Link>{" "}
                  </Typography>
                  {user.email && (
                    <Alert severity="success">
                      Successfuly created account{" "}
                    </Alert>
                  )}
                  {error && <Alert severity="error">{error} </Alert>}
                </form>
              </Grid>
            </Grid>
          )}
          {isLoading && (
            <Grid item xs={12} md={6} sx={{ m: "auto" }}>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Register;
