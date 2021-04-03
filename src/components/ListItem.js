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
      {props.item.title}
    </li>
  );
}

export default ListItem;
