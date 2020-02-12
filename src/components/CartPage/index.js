import React from "react";
import "./cartpage.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { removeProduct } from "../../actions";
import { Link } from "react-router-dom";
const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  let subtotal = 0;
  return (
    <div id="cartPageWrap">
      <h1 id="cartPageHeading">Cart</h1>
      {cart.map(p => {
        subtotal += p.price * p.quantity;
        return (
          <CartItem
            remove={() => dispatch(removeProduct(p))}
            id={p.id}
            name={p.name}
            price={p.price}
            quantity={p.quantity}
            image={p.image}
            category={p.category}
          />
        );
      })}
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <br />
          <Link to="/shop" id="continueShopping" className="routerLink">
            Continue shopping
          </Link>
        </div>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <div id="cartTotalSection">
          <h5 id="cartSubtotal">Subtotal: ${subtotal.toFixed(2)}</h5>
          <Link id="checkoutBtn" className="routerLink" to="/checkout">
            Continue to Checkout
          </Link>

          <Link id="returnCustomer" className="routerLink" to="/login">
            Returning customer? Log in
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CartPage;
