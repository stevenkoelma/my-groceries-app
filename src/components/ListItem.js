import React from "react";

function ListItem(props) {
  return (
    <li
      className="list-item"
      key={props.id}
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </li>
  );
}

export default ListItem;
