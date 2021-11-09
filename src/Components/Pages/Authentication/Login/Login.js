import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Login = () => {
  const { user, logIn, isLoading, error, googleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const HandleLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleGoogleSignIn = () => {
    googleSignIn(location, history);
  };
  const handleLoad = (e) => {
    e.preventDefault();
    logIn(loginData.email, loginData.password, location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ m: "auto" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Log in
          </Typography>
          {!isLoading && (
            <Grid>
              <form onSubmit={handleLoad}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Email"
                  name="email"
                  onChange={HandleLogin}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  name="password"
                  type="password"
                  label="password"
                  onChange={HandleLogin}
                  variant="standard"
                />
                <br />{" "}
                <button type="submit" className="common-btn loginbtn">
                  Log in
                </button>
                <br />{" "}
                <Typography
                  variant="caption text"
                  sx={{
                    marginTop: "15px",
                    display: "inherit",
                    fontStyle: "italic",
                  }}
                >
                  New user ! <Link to="/regi">Create an account</Link>{" "}
                </Typography>
                <button
                  onClick={handleGoogleSignIn}
                  type="submit"
                  className="common-btn loginbtn"
                >
                  Google Login
                </button>
                {user.email && (
                  <Alert severity="success">Successfuly loged in</Alert>
                )}
                {error && <Alert severity="error">{error} </Alert>}
              </form>
            </Grid>
          )}
          {isLoading && (
            <Grid item xs={12} md={6} sx={{ m: "auto" }}>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          hello
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
