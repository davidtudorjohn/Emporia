import React from "react";
import "./featured.css";
import Testimonial from "../Testimonial";

const Featured = () => (
  <div id="featuredWrap">
    <Testimonial
      user="@kellyk"
      image="https://images.unsplash.com/photo-1570737044764-efc7cc50cf2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      testimonial="I've always taken vitamins to make sure my body is getting everything it needs to feel great."
    />
  </div>
);
export default Featured;
