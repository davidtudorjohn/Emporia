import React, { useEffect } from "react";
import { logOut, unsetUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./account.css";
const Account = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleLogOut = e => {
    dispatch(logOut());
    dispatch(unsetUser(user));
  };
  useEffect(() => {
    console.log("account effect running");
    async function fetchUserInfo() {
      await fetch("http/localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: { _id: `${localStorage.getItem("_id")}` }
      }).then(res => {
        console.log(res);
        console.log(`User Header: ${res.headers.get("user")}`);
        // dispatch(setUser(res.headers.get("user")));
      });
    }
    fetchUserInfo();
  }, []);
  console.log(user);
  return isLoggedIn ? (
    <div id="accountWrap">
      <h2 id="accountHeading">Account</h2>
      <h4>Orders</h4>
      <div id="ordersSection">
        <p>No orders yet</p>
      </div>
      <h4>Settings</h4>
      <div id="settingsSection">
        <h5 className="accountSetting">Email</h5>
        <p id="userEmail">{user}</p>
        <button className="editBtn">Edit email</button>
        <h5 className="accountSetting">Password</h5>
        {/* <p>{user}</p> */}
        <button className="editBtn">Edit password</button>
      </div>
      <button id="signOutBtn" onClick={handleLogOut}>
        Sign Out
      </button>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default Account;
