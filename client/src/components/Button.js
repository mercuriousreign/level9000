import { useState } from "react";

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
      })
      .then(() => {
        axios
          .put(`http://localhost:3000/users/${currentuser.id}`, tester)
          .then((response) => {
            if (response.data) {
              console.log("success", response.data);
              setUser((prev) => ({
                ...prev,
                plan_id: response.data.user.plan_id,
              }));
              console.log("before hi", user);
            } else {
              console.log("err", response.data);
            }
            return response;
          })
          .then((response) => {
            const user = response.data.user;
            axios.put("http://localhost:3000/saving_plan", { user });
            console.log("hi hi hi hi :", response);
          })
          .catch((error) => console.log("api errors:", error));
        onSelect();
      });
  }

  return (
    <div>
      <button
       style={{
        backgroundColor: selected ? "gray" : "blue",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        cursor: selected ? "default" : "pointer",
        opacity: selected ? "0.7" : "1",
      }}    
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
