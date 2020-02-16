import React from "react";
import "./input.css";
const Input = props => (
  <div className="inputWrap">
    <label className="inputLabel">
      {props.label}
      {props.notRequired ? "" : <span className="required"> *</span>}
    </label>
    <br />
    <input
      required={props.notRequired ? false : true}
      onChange={props.onChange}
      maxLength={props.maxLength}
      className="inputField"
      type={props.inputType}
      placeholder={props.placeholder}
      value={props.value}
    />
  </div>
);
export default Input;
