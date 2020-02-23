import React from "react";
import NavItem from "../NavItem";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => (
  <div id="footerWrap">
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Company</h5>
      <NavItem to="/shop" class="footerLink" content="Shop" />
      <NavItem
        to="/shop/new-arrivals"
        class="footerLink"
        content="New Arrivals"
      />
      <NavItem to="/about" class="footerLink" content="About Us" />
    </div>
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Company</h5>
      <NavItem to="/privacy" class="footerLink" content="Privacy" />
      <NavItem to="/terms" class="footerLink" content="Terms" />
      <NavItem
        to="/track-my-order"
        class="footerLink"
        content="Track My Order"
      />
      <NavItem to="/contact-us" class="footerLink" content="Contact Us" />
    </div>
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Media</h5>
      <NavItem to="/newsletter" class="footerLink" content="Newsletter" />
      <NavItem to="/press" class="footerLink" content="Press" />
    </div>
    <h1 id="logoFooter">
      <Link className="routerLink" to="/">
        Emporia
      </Link>
      <div id="socialLinks">
        <a href="#" className="socialLink">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="socialLink">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="socialLink">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </h1>
  </div>
);
export default Footer;
