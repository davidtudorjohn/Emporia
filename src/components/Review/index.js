import React from "react";
import StarsRating from "../StarsRating";
import "./review.css";
const Review = props => (
  <div className="review">
    <StarsRating rating={props.rating} />
    <h5>{props.user}</h5>
    <h5 className="reviewHeading">{props.heading}</h5>
    <p>{props.body}</p>
  </div>
);
export default Review;
