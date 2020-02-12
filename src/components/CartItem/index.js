import React from "react";
import "./cartitem.css";

const CartItem = props => {
  // const product = {
  //   id: props.id,
  //   name: props.name,
  //   price: props.price,
  //   quantity: props.quantity,
  //   image: props.image,
  //   category: props.category
  // };
  return (
    <div className="cartItem">
      {/* <Link
        className="routerLink"
        to={`/shop/${props.name.replace(/ /g, "-").toLowerCase()}`}
      > */}
      <img alt="" className="productThumbnail" src={props.image}></img>
      {/* </Link> */}
      <h4 className="cartProductName">{props.name}</h4>

      <div className="cartProductDetails">
        <h5 className="cartDetails">${props.price}</h5>
        <p className="cartDetails" id="quantity">
          Quantity: {props.quantity}
        </p>
        <button className="cartDetails remove" onClick={props.remove}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
