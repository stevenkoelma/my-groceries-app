import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGroceryItem: "",
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Coca-Cola" },
        { id: 3, title: "Rivella" },
      ],
      shoppingListItems: [],
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickGroceryItem = (item) => {
    this.setState((prevState) => {
      const copyShoppingListItems = [...prevState.shoppingListItems];
      const copyItem = { ...item };
      const currentShoppingList = copyShoppingListItems.concat(copyItem);

      const newState = {
        ...prevState,
        shoppingListItems: currentShoppingList,
      };

      return newState;
    });
  };

  emptyCart = () => {
    this.setState({ shoppingListItems: [] });
  };

  handleSubmit(event) {
    event.preventDefault()
    console.log("A name was submitted: " + event.state.newGroceryItem)
    
    }
    
  

  render() {
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <GroceryList
          items={this.state.groceryItems}
          onClick={this.handleClickGroceryItem}
          onSubmit={this.handleSubmit}
        />

        <h1>Winkelwagen</h1>
        <ShoppingCart
          items={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
