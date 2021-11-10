import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Rating from "react-rating";

const Review = (props) => {
  const { displayName, review, rating, img } = props.review;
  console.log("review", props.review);
  return (
    <Grid xs={12} md={3} sm={6}>
      <Paper className="bg-light text-muted p-3 m-2" elevation={6}>
        <Box className="">
          <img
            style={{
              width: "50px",
              borderRadius: "25px",
            }}
            src={img}
            alt=""
          />
          <Box>
            <Typography variant="h6">{displayName}</Typography>
            <Typography variant="caption text" style={{ color: "#fa8b6e" }}>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </Typography>{" "}
            <br />
            <Typography variant="caption text">
              {review.slice(0, 70)}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Review;
