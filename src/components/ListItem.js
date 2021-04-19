import React from "react";

function ListItem(props) {
  return (
    <li
      className="list-item"
      key={props.item.id}
      onClick={() => {
        props.onClick(props.item);
      }}
    >
      <span>{props.item.title}</span>
      <span>{props.readonly ? ` Aantal: ${props.item.amount}` : ""}</span>
    </li>
  );
}

export default ListItem;
