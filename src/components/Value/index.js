import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./value.css";
const Value = props => (
  <div className="value">
    <FontAwesomeIcon className="valueIcon" icon={props.icon} />
    <br />
    <br />
    <h3>{props.value}</h3>
    <br />
    <p>{props.content}</p>
  </div>
);
export default Value;
