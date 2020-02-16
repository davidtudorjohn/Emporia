import React from "react";
import "./aboutpage.css";
import {
  faBalanceScale,
  faMortarPestle,
  faBicycle
} from "@fortawesome/free-solid-svg-icons";
import Value from "../Value";
const AboutPage = () => (
  <div>
    <div id="aboutBanner">
      {" "}
      <h1>Our mission is your health</h1>
      <br />
      <p>
        We source the highest quality products from around the world for health
        conscious people like you.
      </p>
    </div>
    <div id="mission">
      <Value
        value="Health is Wealth"
        icon={faBalanceScale}
        content="We think your health is the most important thing and that's why we do what we do."
      />
      <Value
        value="Ingredients Matter"
        icon={faMortarPestle}
        content="We know ingredients matter. That's why we've gone to great lengths to source the best products."
      />
      <Value
        value="A Healthy Life, A Happy Life"
        icon={faBicycle}
        content="When your health is good, you can live a long and fulfilling life with your loved ones."
      />
    </div>
    <div id="familyBanner"></div>
  </div>
);
export default AboutPage;
