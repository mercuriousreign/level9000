import React, { useState } from "react";
import "./CardListItem.css";

export default function CardListItem(props) {
  const { name, description, img } = props;
  //Props in here are id, name, description and also image
  return (
    <div>
      <h2 className="">{name}</h2>
      <h2 className="">{description}</h2>
      <img className="" src={img} />
    </div>
  );
}
