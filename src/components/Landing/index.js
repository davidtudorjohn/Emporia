import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
const Landing = props => {
  return (
    <div id="landing">
      <h1>Your best life begins here.</h1>
      <Link className="routerLink" to="/shop/new-arrivals">
        <button id="landingBtn">See New Arrivals</button>
      </Link>
    </div>
  );
};
export default Landing;
