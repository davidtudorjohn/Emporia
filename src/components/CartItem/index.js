import React from "react";
import "./cartitem.css";
const CartItem = props => (
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
        Quantity:
      </p>
      <div>
        {" "}
        <button className="quantityBtn" onClick={props.remove}>
          -
        </button>{" "}
        {props.quantity}{" "}
        <button className="quantityBtn" onClick={props.add}>
          +
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
