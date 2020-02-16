import React from "react";
import "./checkoutitem.css";
const CheckoutItem = ({ name, price, quantity }) => (
  <div className="checkoutItem">
    <h5>{name}</h5>
    <h5 className="checkoutItemPrice">${price}</h5>
    <p className="checkoutItemQuantity">Quantity: {quantity}</p>
  </div>
);
export default CheckoutItem;
