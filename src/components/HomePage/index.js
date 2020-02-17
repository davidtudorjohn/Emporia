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
    </>
  );
};
export default HomePage;
