import React from "react";
import "./category.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Category = props => (
  <div className="cat">
    <Link className="routerLink" to={props.path}>
      <h3 className="category">
        {props.content + " "}
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
      </h3>
    </Link>
  </div>
);

export default Category;
