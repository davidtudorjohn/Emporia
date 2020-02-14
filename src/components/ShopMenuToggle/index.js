import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./shopmenutoggle.css";
const ShopMenuToggle = props => (
  <button
    id={props.mobile ? "mobileShopMenuToggle" : "shopMenuToggle"}
    className="routerLink"
    onMouseOver={props.onMouseOver}
    onClick={props.onClick}
  >
    Shop{" "}
    {props.mobile ? (
      props.isMobileShopMenuOpen ? (
        <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
      )
    ) : props.isShopMenuOpen ? (
      <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
    ) : (
      <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
    )}
  </button>
);
export default ShopMenuToggle;
