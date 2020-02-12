import React from "react";
import "./featureditem.css";
const FeaturedItem = props => (
  <div className="featuredItemWrap">
    <h3>{props.content}</h3>
  </div>
);
export default FeaturedItem;
