import React from "react";

const InputField = (props) => {
  
  return (
    <form
      onSubmit={(event) => {
        props.onSubmit(event);
      }}
    >
      <input
        name="newGroceryItem"
        type="text"
        placeholder="Voer je boodschappen in..."
      />
      <button type="submit">Voeg toe</button>
    </form>
  );
};

export default InputField;
