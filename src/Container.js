import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Coca-Cola" },
        { id: 3, title: "Rivella" },
      ],
      shoppingListItems: [
        { id: 1, title: "Chips" },
        { id: 2, title: "Chocolade Milka" },
      ],
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
  }

  handleClickGroceryItem = (event) => {
    /* const clickedItem = event.target.getAttribute("value");
    const currentShoppinglist = this.state.shoppingListItems; */
  };

  render() {
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <GroceryList
          items={this.state.groceryItems}
          onClick={this.handleClickGroceryItem}
        />

        <h1>Winkelwagen</h1>
        <ShoppingCart items={this.state.shoppingListItems} />
      </div>
    );
  }
}

export default Container;
