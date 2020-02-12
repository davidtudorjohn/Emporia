import React from "react";
import "./shoppage.css";
import Category from "../Category";
const ShopPage = () => {
  return (
    <div id="shopPage">
      <div id="col1">
        <Category
          content="Vitamins & Supplements"
          path="/shop/vitamins-supplements"
        />
        <Category content="Skin Care" path="/shop/skin-care" />
        <Category content="Probiotics" path="/shop/probiotics" />
      </div>
      <div id="col2">
        <Category content="Men's Health" path="/shop/mens-health" />
        <Category content="Children's Health" path="/shop/childrens-health" />
        <Category content="Holistic" path="/shop/holistic" />
      </div>
    </div>
  );
};
export default ShopPage;
