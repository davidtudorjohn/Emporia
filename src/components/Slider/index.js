import React, { useState } from "react";
import Slide from "../Slide";
const Slider = props => {
  return (
    <div className="slider">
      {props.images.map(img => (
        <Slide image={img} />
      ))}
    </div>
  );
};
export default Slider;
