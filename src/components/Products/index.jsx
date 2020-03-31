import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
// @props recieve products from api
import PRODUCTS from "./products";
import GalleryFilter from "./GalleryFilter";

const Products = ({ cart }) => {
  const [filter, setFilter] = useState("");

  const handleClick = e => {
    e.preventDefault();
    // set state [e.target.name] : e.target.value
    const { name } = e.target;
    console.log(name);
    setFilter(name);
  };

  const products = PRODUCTS.map((item, i) => (
    <Item {...item} item={item} key={i} />
  ));

  return (
    <div className="products-container">
      <div className="products--nav">
        <a href="/dolcenadaa/">Home</a> /
        <a href="/dolcenadaa/products"> Products</a>
      </div>
      <GalleryFilter handleClick={handleClick} />

      {products}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart
});
export default connect(mapStateToProps, {})(withRouter(Products));
