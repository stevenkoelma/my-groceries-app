import React from "react";

const InputField = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name="newGroceryItem"
        value={props.inputValue}
        type="text"
        placeholder="Voer je boodschappen in..."
        onChange={props.handleChange}
      />
      <button type="submit">Voeg toe</button>
    </form>
  );
};

export default InputField;
