import React, { useState } from "react";
import "./register.css";
import { Link, Redirect } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const handleRegister = async e => {
    e.preventDefault();
    const user = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`
    };
    await fetch(`${process.env.REACT_APP_API_URL}/api/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setIsLogIn(true);
          console.log("User registered successfully");
        } else {
          console.log("User registration failed");
        }
      })
      .catch(err => console.log(err));
  };
  return isLogIn ? (
    <Redirect to="/login" />
  ) : (
    <div id="registerWrap">
      <form id="registerForm" onSubmit={handleRegister}>
        <h2>Register</h2>

        <input
          className="formInput"
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required={true}
        ></input>
        <input
          className="formInput"
          onChange={e => setEmail(e.target.value)}
          type="text/email"
          placeholder="Email"
          required={true}
        ></input>
        <input
          className="formInput"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required={true}
        ></input>
        <input type="submit" value="Register" id="registerBtn"></input>
        <Link className="routerLink" id="orLogin" to="/login">
          Or log in
        </Link>
      </form>
    </div>
  );
};
export default Register;
