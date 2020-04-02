import React, { Component } from "react";
import "../../../assets/stylesheets/productShow.css";
import { AddCartButton } from "../../Cart/AddCartButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addProduct } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../helpers";
import PRODUCTS from "../products";
import { Carousel } from "react-materialize";
class ProductShow extends Component {
  render() {
    const {
      item,
      item: { name, price, image, sku }
    } = this.props.location.state;
    const relatedProducts = PRODUCTS.filter(p => p.sku.includes(sku));
    let carouselImages = relatedProducts.map(p => p.image);
    carouselImages.join(", ");

    return (
      <div className="product-show-container">
        <div className="products--nav">
          <a href="/dolcenadaa/">Home</a> /
          <a href="/dolcenadaa/products"> Products</a> /{" "}
          <a href="/dolcenadaa/products"> {sku.replace("-", "")}</a> /{" "}
          <a href={`/dolcenadaa/products/${sku}`}> {name}</a>
        </div>

        <div className=" product-show--card">
          <img
            className="product-show--card--img"
            src={image}
            alt={name}
            height={120}
            width={120}
          />
          <div className="product-show--card-body secondary-font">
            <h3 className="product-show--card-body--name">{name}</h3>
            <p className="product-show--card-body--price">
              {formatPrice(price, "CAD")}
            </p>
            <p className="product-show--card-body--description">
              Nulla dolore laborum officia incididunt commodo ut velit aliqua ut
              aliquip. Sit do exercitation eu nisi commodo culpa laboris ipsum
              irure dolor velit qui duis deserunt.
            </p>
            <div className="product-show--card-body--add-to-cart-btn">
              <span>
                <AddCartButton
                  product={item}
                  addLabel={"Add to Cart"}
                  addProduct={this.props.addProduct}
                />
              </span>
            </div>
          </div>
          <div className="product-show--card-body--related-items">
            <p>Related Items</p>
            <Carousel
              carouselId="product-show--card-body--carousel"
              children={carouselImages}
              options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: true,
                noWrap: true,
                numVisible: 2,
                onCycleTo: null,
                padding: 0,
                shift: 0
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { addProduct })(
  withRouter(ProductShow)
);