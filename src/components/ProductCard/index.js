import React from "react";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions";
import { Link } from "react-router-dom";
import StarsRating from "../StarsRating";
import { CalculateRating } from "../../functions/CalculateRating";
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

  product.rating = CalculateRating(product.reviews);
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
      <StarsRating rating={product.rating} />
      <p className="productPrice">${props.price}</p>
      <button
        className="addToCart"
        onClick={() => dispatch(addProduct(product))}
      >
        ADD TO CART
      </button>
    </div>
  );
};
export default ProductCard;
