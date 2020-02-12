import React from "react";
import NavItem from "../NavItem";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => (
  <div id="footerWrap">
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Company</h5>
      <Link className="routerLink" to="/shop">
        <NavItem class="footerLink" content="Shop" />
      </Link>
      <Link className="routerLink" to="/new-arrivals">
        <NavItem class="footerLink" content="New Arrivals" />
      </Link>
      <Link className="routerLink" to="/about">
        <NavItem class="footerLink" content="About Us" />
      </Link>
      <Link className="routerLink" to="/mission">
        <NavItem class="footerLink" content="Mission" />
      </Link>
    </div>
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Company</h5>
      <Link className="routerLink" to="/privacy">
        <NavItem class="footerLink" content="Privacy" />
      </Link>
      <Link className="routerLink" to="/terms">
        <NavItem class="footerLink" content="Terms" />
      </Link>
      <Link className="routerLink" to="/track-my-order">
        <NavItem class="footerLink" content="Track My Order" />
      </Link>
      <Link className="routerLink" to="/contact-us">
        <NavItem class="footerLink" content="Contact Us" />
      </Link>
    </div>
    <div className="footerColumn">
      <h5 className="footerMenuTitle">Media</h5>
      <Link className="routerLink" to="/blog">
        <NavItem class="footerLink" content="Blog" />
      </Link>
      <Link className="routerLink" to="/newsletter">
        <NavItem class="footerLink" content="Newsletter" />
      </Link>
      <Link className="routerLink" to="/press">
        <NavItem class="footerLink" content="Press" />
      </Link>
      <Link className="routerLink" to="/media-inquiry">
        <NavItem class="footerLink" content="Media Inquiry" />
      </Link>
    </div>
    <h1 id="logoFooter">
      <Link className="routerLink" to="/">
        Emporia
      </Link>
    </h1>
  </div>
);
export default Footer;
