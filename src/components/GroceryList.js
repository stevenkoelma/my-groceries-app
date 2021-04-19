import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {
  return (
    <div>
      <InputField
        onSubmit={props.onSubmit}
        handleChange={props.handleChange}
        inputValue={props.inputValue}
      />
      <List items={props} onClick={props.onClick} />
    </div>
  );
}

export default GroceryList;
