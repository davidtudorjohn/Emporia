import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = e => {
    e.preventDefault();
    alert(`${email} ${password}`);
  };
  return (
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
