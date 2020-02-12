import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navitem.css";
const NavItem = props => (
  <li className={props.class ? `navItem ${props.class}` : "navItem"}>
    {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ""}
    {props.icon ? " " + props.content : props.content}
    {props.cart ? ` (${props.cart})` : ""}
  </li>
);

export default NavItem;
