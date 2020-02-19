import React from "react";
import "./trackorder.css";
const TrackOrder = () => (
  <div id="trackOrderWrap">
    <div id="trackOrderForm">
      <form>
        <input
          id="trackOrderInput"
          type="text"
          placeholder="Enter order number"
        />
        <input id="trackOrderSubmit" type="submit" value="Track My Order" />
      </form>
    </div>
    <br />
    <h5>Order Details</h5>
  </div>
);
export default TrackOrder;
