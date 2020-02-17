import React from "react";
import "./starsrating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
const StarsRating = props => {
  let rated = props.rating * 2 * 10;
  //   console.log(rated);
  return (
    <div className="starsWrap">
      <div className="starWrap">
        <FontAwesomeIcon className="star" icon={faStar} />
        {rated > 0 && (
          <div className="starInnerWrap">
            <FontAwesomeIcon
              className="starInner"
              icon={rated >= 20 ? faStar : 10 < rated < 19 ? faStarHalf : ""}
            />
          </div>
        )}
      </div>
      <div className="starWrap">
        <FontAwesomeIcon className="star" icon={faStar} />
        {rated > 20 && (
          <div className="starInnerWrap">
            <FontAwesomeIcon
              className="starInner"
              icon={rated >= 40 ? faStar : 30 < rated < 39 ? faStarHalf : ""}
            />
          </div>
        )}
      </div>
      <div className="starWrap">
        <FontAwesomeIcon className="star" icon={faStar} />
        {rated > 40 && (
          <div className="starInnerWrap">
            <FontAwesomeIcon
              className="starInner"
              icon={rated >= 60 ? faStar : 50 < rated < 59 ? faStarHalf : ""}
            />
          </div>
        )}
      </div>
      <div className="starWrap">
        <FontAwesomeIcon className="star" icon={faStar} />
        {rated > 60 && (
          <div className="starInnerWrap">
            <FontAwesomeIcon
              className="starInner"
              icon={rated >= 80 ? faStar : 70 < rated < 79 ? faStarHalf : ""}
            />
          </div>
        )}
      </div>
      <div className="starWrap">
        <FontAwesomeIcon className="star" icon={faStar} />
        {rated > 80 && (
          <div className="starInnerWrap">
            <FontAwesomeIcon
              className="starInner"
              icon={rated >= 95 ? faStar : 90 < rated < 94 ? faStarHalf : ""}
            />
          </div>
        )}
      </div>
      {/* <p className="ratingCount">({props.reviewsCount})</p> */}
    </div>
  );
};
export default StarsRating;
