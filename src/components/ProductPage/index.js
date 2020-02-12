import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions";
import { Link } from "react-router-dom";
import StarsRating from "../StarsRating";
import Review from "../Review";
import "./productpage.css";
const ProductPage = props => {
  const dispatch = useDispatch();
  // console.log(props.location.props);
  return (
    <div>
      <h5 className="productPath">
        <Link className="routerLink" to="/shop">
          Shop
        </Link>{" "}
        >{"   "}
        <Link
          className="routerLink"
          to={`/shop/${props.location.props.category
            .toLowerCase()
            .replace(/ /, "-")
            .replace(/&/, "")
            .replace(/ /, "")
            .replace(/'/, "")}`}
        >
          {props.location.props.category} >
        </Link>
        {"   "}
        {props.location.props.name}
      </h5>
      <div className="productPageMain">
        <img
          alt=""
          className="productPageImage"
          src={props.location.props.image}
        ></img>
        <div className="productPageDetails">
          <h3 className="productPageName">{props.location.props.name}</h3>

          <StarsRating rating={props.location.props.rating} />

          <p className="productPagePrice">${props.location.props.price}</p>
          <button
            className="addToCart"
            onClick={() => dispatch(addProduct(props.location.props))}
          >
            Add to Cart
          </button>
          <h4>Description</h4>
          <br />
          <p>{props.location.props.description}</p>
          <br />
        </div>
      </div>
      <div className="reviewsWrap">
        <h4>Reviews ({props.location.props.reviews.length})</h4>
        <br />
        {/* <StarsRating rating={props.location.props.rating} /> */}
        <>
          {props.location.props.reviews.length > 0
            ? props.location.props.reviews.map(review => (
                <Review
                  rating={review.rating}
                  user={review.user}
                  heading={review.heading}
                  body={review.body}
                />
              ))
            : "No reviews yet"}
        </>
      </div>
    </div>
  );
};
export default ProductPage;
