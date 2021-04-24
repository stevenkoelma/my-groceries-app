import React from "react";

const InputField = (props) => {
  return (
    <div className="inputfield"> <h1>Boodschappenlijst</h1>
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
    </div>
  );
};

export default InputField;
