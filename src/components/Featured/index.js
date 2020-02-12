import React from "react";
import "./featured.css";
import FeaturedItem from "../FeaturedItem";

const Featured = () => (
  <div id="featuredWrap">
    <FeaturedItem content="Food" />
    <FeaturedItem content="Supplements" />
    <FeaturedItem content="Drinks" />
  </div>
);
export default Featured;
