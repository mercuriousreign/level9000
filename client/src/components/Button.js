import { useState } from "react";
import CompletedButton from "./CompletedButton";
import axios from "axios";

export default function Button(props) {

  const { id, plan, onSelect, onReset, selected } = props;
 
  function handleClick(planID) {
    const tester = {
      "user": {
    "plan_id": planID
}}
    axios
      .put(`http://localhost:3000/users/1`, tester )
      .then((response) => {
        if (response.data) {
          console.log("success",response.data);
        } else {
          console.log("err",response.data);
        }
      })
      .catch((error) => console.log("api errors:", error));
      onSelect();
  }
  

  return (
    <div>
      <button onClick={() => { handleClick(id) }} disabled={selected ? true : false}>
      {selected ? "Plan Selected" : "Select Plan"}
    </button>
          {selected && <CompletedButton onReset={onReset} />}
    </div>
  );
}




