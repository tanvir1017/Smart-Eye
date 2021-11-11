import { Alert, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleOnSubmit = (e) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setOpen(true);
          console.log(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2> Make Admin</h2>
      <form onSubmit={handleOnSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="email"
          name="userEmail"
          type="email"
          onBlur={handleEmail}
          variant="standard"
        />
        <br />
        <button className="loginbtn" type="submit">
          Make Admin
        </button>
      </form>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Made Admin Successfull!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default MakeAdmin;
