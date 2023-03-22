import React from "react";
import Button from "./Button";

export default function CompletedButton(props) {
  
  const { onReset } = props;

  function handleClick() {
    onReset();
  }

  return (
    <button onClick={handleClick}>
      Reset Selection
    </button>
  );
}