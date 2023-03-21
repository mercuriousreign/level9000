import { useState } from "react";
import CompletedButton from "./CompletedButton";

export default function Button(props) {

  const { plan, onSelect, onReset, selected } = props;

  function handleClick() {
    // if (!selected) {
    //   setSelected(true);
      onSelect();
    // }
  }
  

  return (
    <div>
    <button onClick={onSelect} disabled={selected ? true : false}>
      {selected ? "Plan Selected" : "Select Plan"}
    </button>
          {selected && <CompletedButton onReset={onReset} />}
    </div>
  );
}




