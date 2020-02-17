import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Input from "../Input";
import "./checkout.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../CheckoutItem";
import {
  CalculateSubtotal,
  CalculateTotal
} from "../../functions/CalculateTotal";
import { setRedirect } from "../../actions";
const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRedirect(null));
  }, []);

  const cart = useSelector(state => state.cart);
  const redirect = useSelector(state => state.redirect);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameBilling, setFirstNameBilling] = useState("");
  const [lastNameBilling, setLastNameBilling] = useState("");
  const [addressBilling, setAddressBilling] = useState("");
  const [cityBilling, setCityBilling] = useState("");
  const [stateBilling, setStateBilling] = useState("");
  const [zipBilling, setZipBilling] = useState("");
  const [phoneBilling, setPhoneBilling] = useState("");
  const [emailBilling, setEmailBilling] = useState("");
  const [isBillingSame, setIsBillingSame] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiration, setExpiration] = useState("");
  console.log(zipBilling);
  //   let subtotal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     subtotal += cart[i].price * cart[i].quantity;
  //   }
  //   let total = subtotal * 0.07 + subtotal;
  let subtotal = CalculateSubtotal(cart);
  let total = CalculateTotal(subtotal, 0.07);

  const handleBillingIsSame = () => {
    setFirstNameBilling(`${firstName}`);
    setLastNameBilling(lastName);
    setAddressBilling(address);
    setCityBilling(city);
    setStateBilling(state);
    setZipBilling(zip);
    setPhoneBilling(phone);
    setEmailBilling(email);
  };

  const handleApplyDiscount = e => {
    e.preventDefault();
    alert("Discount applied");
  };

  const handleOrderSubmit = async e => {
    e.preventDefault();
    const order = {
      f_name: `${firstName}`,
      l_name: `${lastName}`,
      address: `${address}`,
      city: `${city}`,
      zip: `${zip}`,
      state: `${state}`,
      phone: `${phone}`,
      email: `${email}`,
      f_name_billing: `${firstNameBilling}`,
      l_name_billing: `${lastNameBilling}`,
      address_billing: `${addressBilling}`,
      city_billing: `${cityBilling}`,
      state_billing: `${stateBilling}`,
      zip_billing: `${zipBilling}`,
      phone_billing: `${phoneBilling}`,
      email_billing: `${emailBilling}`
    };
    await fetch("http://localhost:5000/user/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          dispatch(setRedirect("/order-confirmation"));
        }
      })
      .catch(err => console.log(err));
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <form onSubmit={handleOrderSubmit}>
      <div id="checkoutWrap">
        <div id="columnOne">
          <h1 id="checkoutHeading">Checkout</h1>
          <br />
          <h5>Shipping Details</h5>
          <br />

          <Input
            onChange={e => setFirstName(e.target.value)}
            label="First Name"
            inputType="text"
          />
          <Input
            onChange={e => setLastName(e.target.value)}
            label="Last Name"
            inputType="text"
          />
          <Input
            onChange={e => setAddress(e.target.value)}
            label="Street Address"
            inputType="text"
          />
          <Input
            onChange={e => setCity(e.target.value)}
            label="Town/City"
            inputType="text"
          />
          <Input
            onChange={e => setState(e.target.value)}
            label="State"
            inputType="text"
          />
          <Input
            onChange={e => setZip(e.target.value)}
            label="ZIP"
            inputType="text"
          />
          <Input
            onChange={e => setPhone(e.target.value)}
            label="Phone"
            inputType="tel"
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            label="Email"
            inputType="text/email"
          />
          <br />
          <h5>Billing Details</h5>
          <br />

          <input
            type="checkbox"
            // onChange={handleBillingIsSame}
            onChange={e => setIsBillingSame(!isBillingSame)}
          />
          <label> Billing information is the same as Shipping</label>
          <br />
          <br />
          <Input
            // value={firstNameBilling}
            onChange={e => setFirstNameBilling(e.target.value)}
            label="First Name"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? lastName : ""}
            onChange={e => setLastNameBilling(e.target.value)}
            label="Last Name"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? address : ""}
            onChange={e => setAddressBilling(e.target.value)}
            label="Street Address"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? city : ""}
            onChange={e => setCityBilling(e.target.value)}
            label="Town/City"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? state : ""}
            onChange={e => setStateBilling(e.target.value)}
            label="State"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? zip : ""}
            onChange={e => setZipBilling(e.target.value)}
            label="ZIP"
            inputType="text"
          />
          <Input
            // value={isBillingSame ? phone : ""}
            onChange={e => setPhoneBilling(e.target.value)}
            label="Phone"
            inputType="tel"
          />
          <Input
            // value={isBillingSame ? email : ""}
            onChange={e => setEmailBilling(e.target.value)}
            label="Email"
            inputType="text/email"
          />
        </div>
        <div id="columnTwo">
          <h5>Order Details</h5>
          <br />
          {cart.map(i => (
            <CheckoutItem
              key={i.name}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
          <div id="totals">
            <br />
            <h5>Subtotal: ${subtotal}</h5>
            <br />
            <h4>Total: ${total}</h4>
            <br />

            <Input
              onChange={e => setDiscountCode(e.target.value)}
              type="text"
              label="Discount Code"
              notRequired={true}
            />
            <button
              onClick={handleApplyDiscount}
              id="applyDiscount"
              type="submit"
              form="discountCodeForm"
            >
              Apply discount
            </button>

            <br />
            <br />
          </div>

          <h2 id="payHeading">Pay with Debit or Credit</h2>
          <Input
            onChange={e => setCardNumber(e.target.value)}
            type="number"
            maxLength="19"
            label="Credit/Debit Card Number"
          />
          <Input
            onChange={e => setCvv(e.target.value)}
            maxLength="3"
            type="number"
            label="CVV"
          />
          <Input
            onChange={e => setExpiration(e.target.value)}
            type="number"
            maxLength="4"
            label="Expires"
            placeholder="MM/YY"
          />
          <input
            readOnly={true}
            id="placeOrder"
            type="submit"
            value="PLACE ORDER"
          ></input>

          {/* <button id="placeOrder">PLACE ORDER</button> */}
        </div>
      </div>
    </form>
  );
};
export default Checkout;
