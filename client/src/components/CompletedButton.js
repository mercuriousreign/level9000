import React from "react";

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