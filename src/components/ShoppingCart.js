import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <div>
      <div className="header">
        <h1>Winkelwagen</h1>
        <button
          onClick={() => {
            props.emptyCart();
          }}
        >
          Leeg winkelmand
        </button>
      </div>
      <List readonly={true} items={props} />
    </div>
  );
};

export default ShoppingCart;
