import React from "react";
import List from "./List";

function GroceryList(props) {
  return <List items={props} onClick={props.onClick} />;
}

export default GroceryList;
