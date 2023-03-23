import { useState } from "react";
import CompletedButton from "./CompletedButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const { user, setUser, id, plan, onSelect, onReset, selected } = props;

  // function getKeyByValue(object, value) {
  //   return Object.keys(object).find(key => object[key] === value);
  // }
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/user");
  };
  function handleClick(planID) {
    // console.log("user plan_id inside button", user.plan_id)
    console.log("user email after button press", user.email);
    const tester = {
      user: {
        plan_id: planID,
      },
    };
    let currentuser = "";
    axios
      .get(`http://localhost:3000/users`)
      .then((response) => {
        const userList = response.data.users;
        const currentUserEmail = user.email;
        currentuser = userList.find((user) => user.email === currentUserEmail);
        console.log("currentuser id inside button", currentuser);
      })
      .then(() => {
        axios
          .put(`http://localhost:3000/users/${currentuser.id}`, tester)
          .then((response) => {
            if (response.data) {
              console.log("success", response.data);
              setUser({ ...user, id: currentuser.id, plan_id: id });
            } else {
              console.log("err", response.data);
            }
          })
          .catch((error) => console.log("api errors:", error));
        onSelect();
      });
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick(id);
          redirect();
        }}
        disabled={selected ? true : false}
      >
        {selected ? "Plan Selected" : "Select Plan"}
      </button>
      {/* {selected && <CompletedButton onReset={onReset} />} */}
    </div>
  );
}
