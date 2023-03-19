import React, { useState } from "react";
import "./CardListItem.css";

export default function CardListItem(props) {
  const { name, img, exercise } = props;
  //console.log("props inside with decons", name, img);
  //Props in here are id, name, description and also image
  return (
    <div>
      <h2 className="">{name}</h2>
      <h2 className="">{}</h2>
      <img className="" src={img} />
      <h3>{exercise.name}</h3>
      <p>{exercise.instructions}</p>
    </div>
  );
}
