import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const listItems = this.props.items.items.map((item) => (
      <ListItem
        key={item.id}
        value={item.title}
        onClick={this.props.items.onClick}
      />
    ));

    return <ul>{listItems}</ul>;
  }
}

export default List;
