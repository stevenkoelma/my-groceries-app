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
    this.handleChange = this.handleChange.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
  }

  addAmountToItem = (itemTitle) => {
    const shoppingList = [...this.state.shoppingListItems];
    const newShoppingList = shoppingList.map((shoppingItem) => {
      if (shoppingItem.title === itemTitle.title) {
        shoppingItem.amount++;
      }
      return shoppingItem;
    });
    this.setState({ shoppingListItems: newShoppingList });
  };

  handleClickGroceryItem = (item) => {
    this.setState((prevState) => {
      const copyShoppingListItems = [...prevState.shoppingListItems];
      const newShoppingListItem = { ...item };
      const itemExists = copyShoppingListItems.some(
        (item) => newShoppingListItem.title === item.title
      );
      if (!itemExists) {
        newShoppingListItem.amount = 1;
        const currentShoppingList = copyShoppingListItems.concat(
          newShoppingListItem
        );

        const newState = {
          ...prevState,
          shoppingListItems: currentShoppingList,
        };

        return newState;
      } else {
        return this.addAmountToItem(newShoppingListItem);
      }
    });
  };

  emptyCart = () => {
    this.setState({ shoppingListItems: [] });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => {
      const currentGroceryList = [...prevState.groceryItems];
      const newGroceryItem = {
        id: this.state.groceryItems.length + 1,
        title: this.state.newGroceryItem,
      };

      if (this.state.newGroceryItem === "") {
        alert("Voer een boodschap in");
      } else {
        const newGrocerylist = currentGroceryList.concat(newGroceryItem);

        const newState = {
          groceryItems: newGrocerylist,
        };

        return newState;
      }
    });
    this.setState({ newGroceryItem: "" });
  }

  handleChange(event) {
    this.setState({ newGroceryItem: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <GroceryList
          items={this.state.groceryItems}
          onClick={this.handleClickGroceryItem}
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.newGroceryItem}
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
