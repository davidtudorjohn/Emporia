import React from "react";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions";
import { Link } from "react-router-dom";
import StarsRating from "../StarsRating";
const ProductCard = props => {
  const dispatch = useDispatch();
  const product = {
    id: props.id,
    category: props.category,
    name: props.name,
    price: props.price,
    image: props.image,
    description: props.description,
    rating: props.rating,
    reviews: props.reviews
  };
  const calcRating = reviews => {
    let ratingsTotal = 0;
    let ratingsCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      ratingsTotal += reviews[i].rating;
      ratingsCount += 1;
    }
    let calculatedRating = ratingsTotal / ratingsCount;
    return isNaN(calculatedRating) ? 0 : calculatedRating;
  };
  product.rating = calcRating(product.reviews);
  return (
    <div className="productCard">
      <Link
        to={{
          pathname: `/shop/${props.name
            .replace(/-/g, "")
            .replace(/ /g, "-")
            .replace(/--/g, "-")
            .toLowerCase()}`,
          props: product
        }}
      >
        <img alt="" src={props.image} className="productImage"></img>
      </Link>
      <p className="productName">{props.name}</p>
      <StarsRating
        rating={product.rating}
        // reviewsCount={props.reviews.length}
      />
      <p className="productPrice">${props.price}</p>
      <button
        className="addToCart"
        onClick={() => dispatch(addProduct(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
