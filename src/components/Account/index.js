import React from "react";
import { logOut } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const Account = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogOut = e => {
    dispatch(logOut());
    localStorage.removeItem("auth-token");
  };
  return isLoggedIn ? (
    <div>
      <h2>Account</h2>
      <button>Orders</button>
      <button>Settings</button>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default Account;
