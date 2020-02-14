import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navitem.css";
import { Link } from "react-router-dom";
const NavItem = props => (
  <Link onClick={props.onClick} to={props.to} className="routerLink">
    <li className={props.class ? `navItem ${props.class}` : "navItem"}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ""}
      {props.icon ? " " + props.content : props.content}
      {props.cart ? ` (${props.cart})` : ""}
    </li>
  </Link>
);

export default NavItem;
