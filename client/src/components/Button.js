import { useState } from "react";

export default function Button(props) {

  const { plan, onSelect, selected } = props;

  function handleClick() {
    // if (!selected) {
    //   setSelected(true);
      onSelect();
    // }
  }
  

  return (
    <button onClick={onSelect} disabled={selected ? true : false}>
      {selected ? "Plan Selected" : "Select Plan"}
    </button>
  );
}




