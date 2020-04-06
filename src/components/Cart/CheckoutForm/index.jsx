import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import {
  TextInput,
  Button,
  Icon,
  Dropdown,
  DatePicker
} from "react-materialize";

import "../../../assets/stylesheets/checkoutForm.css";

const CheckoutForm = ({
  cart: { products },
  auth: {
    user: { name }
  }
}) => {
  const [firstName, setFirstName] = useState(name || "");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");

  const checkoutData = {
    name: {
      firstName,
      lastName
    },
    email,
    address: {
      addressNumber,
      street,
      city,
      province,
      postalCode
    },
    paymentMethod,
    dateNeededBy: date,
    order: {
      products: products.map(
        product => `${product.sku}${product.name}-${product.quantity}`
      )
    }
  };

  const handleSetPaymentMethod = value => {
    setPaymentMethod(value);
  };

  const handleSetDate = value => {
    const stringValue = String(value);
    const seperatedDate = stringValue.split(" ");
    setDate(`${seperatedDate[0]}, ${seperatedDate[1]} ${seperatedDate[2]}`);
  };

  return (
    <div className="checkout-form">
      <ConfirmationModal checkoutData={checkoutData} />
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

                  <Icon down-arrow className="down-arrow">
                    arrow_downward
                  </Icon>
                </div>
              }
            >
              <span
                className="checkout-form--payment-method--dropdown-a"
                onClick={e => handleSetPaymentMethod("E-transfer")}
              >
                E-transfer
              </span>
              <span
                className="checkout-form--payment-method--dropdown-a"
                onClick={e => handleSetPaymentMethod("Cash")}
              >
                Cash
              </span>
            </Dropdown>
          </div>
          <div className="row">
            <h3>When do you need it by?</h3>
          </div>
          <div className="row">
            <div class="input-field col s4">
              <DatePicker
                id="date"
                options={{
                  defaultDate: date
                }}
                value={date}
                onChange={e => handleSetDate(e)}
              />
            </div>

            <div class="input-field col s8"></div>
          </div>
          <div className="row">
            <div className="col s12 checkout-form--submit">
              {/* onClick show confirmation form  */}
              <Button
                node="button"
                waves="light"
                type="submit"
                className="modal-trigger"
                href="#confirmModal"
              >
                Go to Confirmation
                <ArrowRightAltIcon />
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
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout
});

export default connect(mapStateToProps, {})(withRouter(CheckoutForm));
