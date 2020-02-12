import React from "react";
import "./homepage.css";
import DiscountBanner from "../DiscountBanner";
import Landing from "../Landing";
import Featured from "../Featured";
import EmailList from "../EmailList";
import ProductList from "../ProductList";
const HomePage = props => {
  return (
    <>
      <DiscountBanner />
      <Landing />
      <Featured />
      <EmailList />
      <ProductList
        pageTitle="Featured Products"
        dataCategory="vitamins"
        noSearch={true}
      />
      {/* <div id="productList">
        <ProductCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwolper.com.au%2Fwp-content%2Fuploads%2F2017%2F10%2Fimage-placeholder.jpg&f=1&nofb=1"
          name="Premium Vitamins"
          price={17.99}
        />
        <ProductCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwolper.com.au%2Fwp-content%2Fuploads%2F2017%2F10%2Fimage-placeholder.jpg&f=1&nofb=1"
          name="Premium Vitamins"
          price={17.99}
        />
        <ProductCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwolper.com.au%2Fwp-content%2Fuploads%2F2017%2F10%2Fimage-placeholder.jpg&f=1&nofb=1"
          name="Premium Vitamins"
          price={17.99}
        />
      </div> */}
    </>
  );
};
export default HomePage;
