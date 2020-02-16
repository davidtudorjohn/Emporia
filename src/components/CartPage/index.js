import React from "react";
import "./cartpage.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { removeProduct, addProduct, setRedirect } from "../../actions";
import { Link } from "react-router-dom";
import { CalculateSubtotal } from "../../functions/CalculateTotal";
const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  let subtotal = CalculateSubtotal(cart);
  console.log(subtotal);
  return (
    <div id="cartPageWrap">
      <h1 id="cartPageHeading">Cart</h1>
      {cart.map(p => (
        <CartItem
          key={p.name}
          remove={() => dispatch(removeProduct(p))}
          add={() => dispatch(addProduct(p))}
          id={p.id}
          name={p.name}
          price={p.price}
          quantity={p.quantity}
          image={p.image}
          category={p.category}
          rating={p.rating}
          reviews={p.reviews}
        />
      ))}
      {cart.length === 0 && (
        <div>
          <p>Your cart is empty</p>
          <br />
          <Link to="/shop" id="continueShopping" className="routerLink">
            Continue shopping
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div id="cartTotalSection">
          <h5 id="cartSubtotal">Subtotal: ${subtotal}</h5>
          <Link id="checkoutBtn" className="routerLink" to="/checkout">
            Continue to Checkout
          </Link>
          {!isLoggedIn && (
            <Link
              onClick={() => dispatch(setRedirect("/checkout"))}
              id="returnCustomer"
              className="routerLink"
              to="/login"
            >
              Returning customer? Log in
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
export default CartPage;
