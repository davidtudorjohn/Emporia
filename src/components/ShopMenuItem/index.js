import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./shopmenuitem.css";
const ShopMenuItem = props => (
  <Link onClick={props.onClick} className="routerLink" to={props.to}>
    <div className={props.mobile ? "mobileShopMenuItem" : "shopMenuItem"}>
      <FontAwesomeIcon
        className={props.mobile ? "mobileShopItemIcon" : "shopItemIcon"}
        icon={props.icon}
      />
      <p>{props.content}</p>
    </div>
  </Link>
);
export default ShopMenuItem;
