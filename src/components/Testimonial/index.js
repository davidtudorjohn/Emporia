import React from "react";
import "./testimonial.css";
const Testimonial = props => (
  <div className="testimonialWrap">
    <div id="column1">
      <img className="testimonialImg" src={props.image}></img>
    </div>
    <div id="column2">
      <div id="testimonialContent">
        <h5>{props.user}</h5>
        <br />
        <p>{props.testimonial}</p>
      </div>
    </div>
  </div>
);
export default Testimonial;
