import React, { useState } from "react";
import "./emaillist.css";
const EmailList = () => {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = e => {
    e.preventDefault();
    alert(`Email added: ${email}`);
  };

  return (
    <div id="emailListWrap">
      <h3 id="emailListHeading">
        Sign up for our newsletter for deals and more!
      </h3>
      <form
        id="emailListForm"
        name="emailListForm"
        onSubmit={handleEmailSubmit}
      >
        <input
          type="text/email"
          placeholder="Enter your email"
          id="emailListInput"
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" id="emailListSubmit" htmlFor="emailListForm" />
      </form>
    </div>
  );
};
export default EmailList;
