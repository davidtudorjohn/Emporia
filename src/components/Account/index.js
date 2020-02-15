import React from "react";
import { logOut } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./account.css";
const Account = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogOut = e => {
    dispatch(logOut());
  };
  return isLoggedIn ? (
    <div id="accountWrap">
      <h2 id="accountHeading">Account</h2>
      <h4>Orders</h4>
      <div id="ordersSection">
        <p>No orders yet</p>
      </div>
      <h4>Settings</h4>
      <div id="settingsSection">
        <h5>Email</h5>
        <button>Edit email</button>
        <h5>Password</h5>
        <button>Edit password</button>
      </div>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default Account;
