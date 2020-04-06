import React from "react";

const CookieDescription = props => {
  const {
    item,
    description,
    description: { dough, mixin, stuffing, topping }
  } = props;
  console.log(description.default);
  const itemIsCookie = item.sku.includes("cookie");
  const getOtherDescription = () => {
    return <li>{description.default}</li>;
  };
  return (
    <div className="product-description">
      <ul>
        {!itemIsCookie ? (
          getOtherDescription()
        ) : (
          <>
            <li>
              <strong>Dough: </strong>
              {dough}
            </li>
            <li>
              <strong>Mixin: </strong> {mixin}
            </li>
            <li>
              <strong>Stuffing: </strong>
              {stuffing}
            </li>
            <li>
              <strong>Toppings: </strong> {topping}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CookieDescription;