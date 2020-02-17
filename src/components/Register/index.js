import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          console.log("User registered successfully");
        } else {
          console.log("User registration failed");
        }
      })
      .catch(err => console.log(err));

    // alert(`${name} ${email} ${password}`);
  };
  return (
    <div id="registerWrap">
      <form id="registerForm" onSubmit={handleRegister}>
        <h2>Register</h2>

        <input
          className="formInput"
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Name"
        ></input>
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
        <input type="submit" value="Register" id="registerBtn"></input>
        <Link className="routerLink" id="orLogin" to="/login">
          Or log in
        </Link>
      </form>
    </div>
  );
};
export default Register;
