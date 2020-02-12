import React, { useState } from "react";
import "./discountbanner.css";
const DiscountBanner = () => {
  const [isBannerShowing, setIsBannerShowing] = useState(true);
  return (
    isBannerShowing && (
      <div id="discountBanner">
        Use promo code <strong>EMPORIA2020</strong> for free shipping on all
        orders over $100!
        <button onClick={() => setIsBannerShowing(false)} id="closeBanner">
          ✖
        </button>
      </div>
    )
  );
};
export default DiscountBanner;
