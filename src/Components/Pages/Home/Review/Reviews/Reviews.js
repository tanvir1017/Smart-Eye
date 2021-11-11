import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://damp-dawn-73737.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <div className="products" style={{ marginBottom: "" }}>
        Consumer Satisfaction
      </div>
      <Grid container spacing={2} sx={{ my: 5 }}>
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
