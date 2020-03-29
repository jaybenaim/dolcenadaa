import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../../redux/actions/checkoutActions";
import CheckoutFormDropdown from "./CheckoutFormDropdown";
import CheckoutFormDatePicker from "./CheckoutDatePicker";
import {
  TextInput,
  Button,
  Icon,
  Dropdown,
  DatePicker
} from "react-materialize";
// import { Dropdown } from "react-bootstrap";

import "../../../assets/stylesheets/checkoutForm.css";
import { useEffect } from "react";
import { string } from "prop-types";
const CheckoutForm = ({
  data,
  auth: {
    user: { name }
  }
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");

  const handleSetPaymentMethod = value => {
    setPaymentMethod(value);
  };

  const handleSetDate = value => {
    console.log(value);
    const stringValue = String(value);
    const seperatedDate = stringValue.split(" ");
    setDate(`${seperatedDate[0]}, ${seperatedDate[1]} ${seperatedDate[2]}`);
  };
  return (
    <div className="checkout-form">
      <div className="row">
        <h4>Full Name</h4>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="firstName"
                type="text"
                className="validate"
                defaultValue={name || ""}
                label="First Name"
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field col s6">
              <TextInput
                id="lastName"
                type="text"
                label="Last Name"
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <TextInput
                email
                id="email"
                label="Email"
                validate
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <h4>Address</h4>
          </div>

          <div className="row">
            <div className="input-field col s3">
              <TextInput
                id="addressNumber"
                type="text"
                label="#"
                onChange={e => setAddressNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <TextInput
                id="street"
                type="text"
                label="Street"
                onChange={e => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="city"
                type="text"
                label="City"
                onChange={e => setCity(e.target.value)}
              />
            </div>

            <div className="input-field col s6">
              <TextInput
                id="province"
                type="text"
                label="Province"
                onChange={e => setProvince(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="postalCode"
                type="text"
                label="Postal Code"
                onChange={e => setPostalCode(e.target.value)}
              />
            </div>
            <div className="input-field col s6"></div>
          </div>
          <div className="row">
            <h3>Payment Method</h3>
          </div>
          <div className="row">
            <Dropdown
              trigger={
                <div class="input-field col s4">
                  <TextInput
                    type="text"
                    id="paymentMethod"
                    label="Payment Method"
                    name="paymentMethod"
                    value={paymentMethod}
                    onCloseStart={e => handleSetPaymentMethod(e.target.value)}
                  />

                  <div class="">
                    <Icon down-arrow className="down-arrow">
                      arrow_downward
                    </Icon>
                  </div>
                </div>
              }
            >
              <a onClick={e => handleSetPaymentMethod("E-transfer")}>
                E-transfer
              </a>
              <a onClick={e => handleSetPaymentMethod("Cash")}>Cash</a>
            </Dropdown>
          </div>
          <div className="row">
            <h3>When do you need it by?</h3>
          </div>
          <div className="row">
            <DatePicker
              id="date"
              options={{ defaultDate: date }}
              value={date}
              onChange={e => handleSetDate(e)}
            />
          </div>
          <div className="row">
            <div className="col s12 checkout-form--submit">
              {/* onClick show confirmation form  */}
              <Button node="button" type="submit" waves="light">
                Submit
                <Icon right>send</Icon>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { sendEmail })(
  withRouter(CheckoutForm)
);

//   const handleSendEmail = data => {
//     const { products } = data;
//     const productSkus = products.map(product => product.sku);

//     const emailBody = `<div> <div className="email-template" style="display: grid;grid-template-columns: 1fr 1fr 1fr;" > <h1 style="grid-column: 1 / span 3;margin: 0 auto;margin-top: 10%;"> Order </h1><table style="width: 100%;margin-top: 10%;"><tr><th style="grid-column: 2">${name}</th><th style="grid-column: 2">$Email</th></tr> <tr> <td>$paymentMethod</td> <td>$address</td><td>$needBy</td></tr> </table> <div className="email-template--info"> <p className="email-template--info-name">${"name"}</p><p className="email-template--info-email">${"email"}</p> </div> </div></div>`;

//     const email = {
//       //@props TODO: create onchange
//       name: name || "name",
//       email: "jacob.benaim@icloud.com",
//       message: `Error with the order contact - `,
//       html: emailBody
//     };
//     // @post to /email
//     sendEmail(email);
//   };
