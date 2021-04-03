import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.emptyCart();
        }}
      >
        Leeg winkelmand
      </button>
      <List items={props} />
    </div>
  );
};

export default ShoppingCart;
