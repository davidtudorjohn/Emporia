import React, { useState } from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setUser } from "../../actions";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [logInSuccessMsg, setLogInSuccessMsg] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const redirect = useSelector(state => state.redirect);
  const dispatch = useDispatch();
  // const handleLogInSuccessMsg = () => {
  //   setLogInSuccessMsg(true);
  //   setTimeout(setLogInSuccessMsg(false), 1000);
  // };
  const handleLogin = async e => {
    e.preventDefault();
    const user = {
      email: `${email}`,
      password: `${password}`
    };
    await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.status === 200) {
          console.log("Login successful");
          // let user = res.json();
          console.log(user);
          console.log(res.headers.get("auth-token"));
          localStorage.setItem("auth-token", res.headers.get("auth-token"));
          dispatch(logIn());
          dispatch(setUser(user.email));
        } else console.log("Login failed");
      })
      .catch(err => console.log(err));
  };
  return isLoggedIn ? (
    <Redirect to={redirect !== null ? `${redirect}` : "/shop"} />
  ) : (
    <div id="loginWrap">
      <form id="loginForm" onSubmit={handleLogin}>
        <h2>Log In</h2>
        <input
          className="formInput"
          onChange={e => setEmail(e.target.value)}
          type="text/email"
          placeholder="Email"
        ></input>
        <input
          className="formInput"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        <input id="loginBtn" type="submit" value="Log In"></input>
        <Link className="routerLink" id="orRegister" to="/register">
          Or register
        </Link>
      </form>
    </div>
  );
};
export default Login;
