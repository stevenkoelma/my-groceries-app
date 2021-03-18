import React from "react";
import List from "./List";

function ShoppingCart(props) {
  console.log(props)
  return <List items={props} />;
}

export default ShoppingCart;

